import React from "react";
import { createRoot } from "react-dom/client";
import Appp from "./Appp";
import { HashRouter } from "react-router-dom";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
createRoot(document.getElementById("app")).render(
  <HashRouter>
    <ChakraProvider>
      <Appp />
    </ChakraProvider>
  </HashRouter>
);
