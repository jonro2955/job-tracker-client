"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var history_1 = __importDefault(require("./utils/history"));
var Add_1 = __importDefault(require("./views/Add"));
var Search_1 = __importDefault(require("./views/Search"));
var Profile_1 = __importDefault(require("./views/Profile"));
function App() {
    return history_1.default = { history: history_1.default } >
        />
        < react_router_dom_1.Switch >
        path;
    "/";
    exact;
    component = { Home: Add_1.default } /  >
        path;
    "/search";
    component = { Search: Search_1.default } /  >
        path;
    "/profile";
    component = { Profile: Profile_1.default } /  >
        /Switch>
        < /Router>;
    ;
}
exports.default = App;
