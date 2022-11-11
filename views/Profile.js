"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var auth0_react_1 = require("@auth0/auth0-react");
var LoadingSpinner_1 = __importDefault(require("../components/LoadingSpinner"));
var Profile = function () {
    var _a = auth0_react_1.useAuth0(), user = _a.user, logout = _a.logout;
    console.log("user: ", user);
    var logoutWithRedirect = function () {
        return logout({
            returnTo: window.location.origin,
        });
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Profile page content"),
        react_1.default.createElement("button", { onClick: function () { return logoutWithRedirect(); }, style: { padding: "5px" } }, "Log out"),
        react_1.default.createElement("p", null,
            "email: ",
            user.email),
        react_1.default.createElement("p", null,
            "email_verified: ",
            user.email_verified ? "True" : "False"),
        react_1.default.createElement("p", null,
            "family_name: ",
            user.family_name),
        react_1.default.createElement("p", null,
            "given_name: ",
            user.given_name),
        react_1.default.createElement("p", null,
            "locale: ",
            user.locale),
        react_1.default.createElement("p", null,
            "name: ",
            user.name),
        react_1.default.createElement("p", null,
            "nickname: ",
            user.nickname),
        react_1.default.createElement("p", null, "picture: "),
        react_1.default.createElement("img", { src: user.picture, alt: "Profile" }),
        react_1.default.createElement("p", null,
            "sub: ",
            user.sub),
        react_1.default.createElement("p", null,
            "updated_at: ",
            user.updated_at)));
};
exports.default = auth0_react_1.withAuthenticationRequired(Profile, {
    onRedirecting: function () { return react_1.default.createElement(LoadingSpinner_1.default, null); },
});
