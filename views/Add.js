"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var auth0_react_1 = require("@auth0/auth0-react");
var Add = function () {
    var isAuthenticated = auth0_react_1.useAuth0().isAuthenticated;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Add page content"),
        react_1.default.createElement("p", null, "To stay logged in, enable 3rd party cookies for this domain: Goto browser settings, privacy and security, cookies and other site data, in \"Sites that can always use cookies\", add \"http://localhost\" and enable third party cookies on this site."),
        react_1.default.createElement("p", null, "Render an \"Add\" button below only if user is signed in. Otherwise, let guests preview the parse scraper autofill functionality"),
        isAuthenticated && react_1.default.createElement("button", null, "Add")));
};
exports.default = Add;
