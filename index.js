"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __importDefault(require("react-dom/client"));
var authConfig_js_1 = require("./authConfig.js");
var history_js_1 = __importDefault(require("./utils/history.js"));
require("bootstrap/dist/css/bootstrap.css");
var authConfig = authConfig_js_1.();
var onRedirectCallback = function (appState) {
    history_js_1.default.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
};
var providerConfig = __assign(__assign({ domain: authConfig.domain, clientId: authConfig.clientId }, (authConfig.audience ? { audience: authConfig.audience } : null)), { redirectUri: window.location.origin, onRedirectCallback: onRedirectCallback });
var root = client_1.default.createRoot(document.getElementById("root"));
root.render(__assign({}, providerConfig) >
    />
    < /Auth0Provider>);
