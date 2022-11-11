"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var auth0_react_1 = require("@auth0/auth0-react");
var react_router_dom_1 = require("react-router-dom");
var NavBar = function () {
    /* Use the useAuth0 hook in your components to access the auth state and methods.
  
    const {
  
      // Auth state:
      error,
      isAuthenticated,
      isLoading,
      user,
  
      // Auth methods:
      getAccessTokenSilently,
      getAccessTokenWithPopup,
      getIdTokenClaims,
      loginWithRedirect,
      loginWithPopup,
      logout,
  
    } = useAuth0<TUser>();
  
    TUser is an optional type param to provide a type to the user field.*/
    var _a = auth0_react_1.useAuth0(), isAuthenticated = _a.isAuthenticated, loginWithRedirect = _a.loginWithRedirect;
    return (react_1.default.createElement("div", { className: "d-flex justify-content-center" },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/", style: { padding: "5px" } }, "Add"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/search", style: { padding: "5px" } }, "Search"),
        isAuthenticated ? (react_1.default.createElement(react_router_dom_1.Link, { to: "/profile", style: { padding: "5px" } }, "Profile")) : (react_1.default.createElement("button", { onClick: function () { return loginWithRedirect(); }, style: { padding: "5px" } }, "Log in"))));
};
exports.default = NavBar;
