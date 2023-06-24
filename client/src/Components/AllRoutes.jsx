import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Authentication from "./Authentication";
import Mainpage from "./Mainpage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat" element={<Mainpage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
