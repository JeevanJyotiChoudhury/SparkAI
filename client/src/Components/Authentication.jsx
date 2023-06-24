import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
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
    <Box
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
    >
      <Text fontSize="4xl" color="white">
        SparkAI
      </Text>
      <br />
      <Button onClick={redirectLogin} mr={2}>
        Log In
      </Button>
      <Button onClick={redirectSignup} ml={2}>
        Sign Up
      </Button>
    </Box>
  );
};

export default Authentication;
