import React from "react";
import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#606169",
        height:"auto"
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AllRoutes/>
    </ChakraProvider>
  );
}

export default App;
