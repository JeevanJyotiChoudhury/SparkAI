import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import HomePage from "../Pages/HomePage";

const AllRoutes = () => {
  return (
    <div>
      <h3>SparkAI</h3>
      <HomePage />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
