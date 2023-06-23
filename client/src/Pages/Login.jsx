import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {};
  return (
    <div>
      <Flex minH={"70vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"2xl"} px={6}>
          <Box w={"400px"} rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <center>
                <Text fontSize={"3xl"} as="b">
                  LOGIN
                </Text>
              </center>
              <FormControl id="email">
                <FormLabel>Enter Your Email Id</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  backgroundColor={"#ED2887"}
                  onClick={handleLogin}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  borderRadius="none"
                  my={2}
                >
                  CONTINUE
                </Button>
              </Stack>
              <Box>
                Don't have a account
                <Text color="blue">
                  <Link>Sign Up</Link>
                </Text>
              </Box>
              <hr />
              
              <Box py={6} mx={2}>
                By proceeding, you agree to{" "}
                <span>
                  <Text color="#ED2887" textDecoration={"underline"}>
                    Privacy Policy, Terms & Conditions
                  </Text>
                </span>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default Login;
