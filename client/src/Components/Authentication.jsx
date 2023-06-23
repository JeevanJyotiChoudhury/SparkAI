import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();
  const redirectLogin = () => {
    navigate("/login");
  };
  const redirectSignup = () => {
    navigate("/signup");
  };
  return (
    <div>
      <Button onClick={redirectLogin}>Log In</Button>
      <Button onClick={redirectSignup}>Sign Up</Button>
    </div>
  );
};

export default Authentication;
