import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/signup");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { email, password };
    axios
      .post("http://localhost:8080/user/login", userData)
      .then((res) => {

        console.log(res)
      
      if(res.data.msg==="login succesfull"){

         alert(res.data.msg)
        localStorage.setItem("ch-token", res.data?.accessToken);
        navigate("/chat");

      }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div style={{ color: "white" }}>
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"3xl"}>Login to SparkAI</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("#3d3e42", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                </Stack>
                <Button
                  onClick={handleLogin}
                  bg={"#19c37d"}
                  color={"white"}
                  _hover={{
                    bg: "#606169",
                  }}
                >
                  Sign in
                </Button>
                <Link color={"#19c37d"} onClick={handleSignup}>
                  Signup
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default Login;
