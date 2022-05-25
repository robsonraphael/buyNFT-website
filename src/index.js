import react from "react";
import reactDom from "react-dom/client";
import App from "./App";
import { Global } from "./styles/global";

const root = reactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <Global />
    <App />
  </>
);
