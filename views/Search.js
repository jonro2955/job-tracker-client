"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Search = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Search page content"),
        react_1.default.createElement("p", null, "If user is logged out, load a bunch of sample job applications here so that guests can use the search feature")));
};
exports.default = Search;
