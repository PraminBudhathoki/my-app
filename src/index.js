import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
