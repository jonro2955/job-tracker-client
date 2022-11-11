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
var authConfig_json_1 = __importDefault(require("./authConfig.json"));
function getAuthConfig() {
    // Configure the audience here. By default, it will take whatever is in the config
    // (specified by the `audience` key) unless it's the default value of "YOUR_API_IDENTIFIER" (which
    // is what you get sometimes by using the Auth0 sample download tool from the quickstart page, if you
    // don't have an API).
    // If this resolves to `null`, the API page changes to show some helpful info about what to do
    // with the audience.
    var audience = authConfig_json_1.default.audience && authConfig_json_1.default.audience !== "YOUR_API_IDENTIFIER"
        ? authConfig_json_1.default.audience
        : null;
    return __assign({ domain: authConfig_json_1.default.domain, clientId: authConfig_json_1.default.clientId }, (audience ? { audience: audience } : null));
}
exports.getAuthConfig = getAuthConfig;
