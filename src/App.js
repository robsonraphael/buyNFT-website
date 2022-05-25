import React from "react";
import {Container} from './styles/global'
import Navbar from "./pattern/navbar";
import Main from "./pattern/main";

export default function App() {
  return (
    <Container>
      <Navbar />
      <Main />
    </Container>
  );
}
