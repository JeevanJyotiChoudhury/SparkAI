const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { BlackModel } = require("../models/blacklist.model");
const { userModel } = require("../models/user.model");
require('dotenv').config()
let privateKey = process.env.privateKey
const RegisterController = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const isuserPresent = await userModel.findOne({ email })
          if(isuserPresent){
            return res.status(200).json({msg:"Login Directly"})
          }
        bcrypt.hash(password, 4, async (err, hash) => {
            const user = new userModel({ name, email, password: hash })
            await user.save()
            res.status(201).send({ "msg": "Registration Succesfull" })

        });
    } catch (error) {
        res.status(401).send({ "msg": "Some error occourd while  Registration" })

    }

}

const LoginController = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await userModel.findOne({ email })

        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    let accessToken = jwt.sign({ "userID": user._id }, privateKey, { expiresIn: '7h' })
                    let refreshToken = jwt.sign({ "userID": user._id }, privateKey, { expiresIn: '7d' })
                    res.status(201).send({ "msg": "login succesfull", "accesstoken": accessToken, "refreshtoken": refreshToken, userdetails: user })
                } else {
                    res.status(401).send({ "msg": "Wrong Credentials" })
                }
            });
        } else {
            res.status(401).send({ "msg": "login failed,user is not present" })

        }
    } catch (error) {
        res.status(401).send({ "msg": "error occourd while login " })

    }
}



const LogoutController = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]

        const isTokenPresent = await BlackModel.findOne({ token: token })
        if (isTokenPresent) {
            return res.status(404).send({ "msg": "You Have Logout Already" })
        }

        const black = new BlackModel({ token: token })
        await black.save()

        res.send({ "msg": "Logout Succesfully", "ok": true })
    } catch (error) {
         res.status(401).send({ "msg": error.message })

    }
}

module.exports = { RegisterController, LoginController, LogoutController }