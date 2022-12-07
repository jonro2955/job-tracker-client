// import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { authConfig } from "./utils/authConfig";
import App from "./App";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider {...authConfig}>
      <App />
  </Auth0Provider>
);
