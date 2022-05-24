import react from "react";
import reactDom from "react-dom/client";
import App from "./App";
import { Global, Container } from "./styles/global";

const root = reactDom.createRoot(document.getElementById("root"));

root.render(
  <Container>
    <Global />
    <App />
  </Container>
);
