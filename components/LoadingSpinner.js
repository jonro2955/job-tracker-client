"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var loading_svg_1 = __importDefault(require("../assets/loading.svg"));
var LoadingSpinner = function (props) {
    react_1.useEffect(function () {
        console.log(props);
    }, []);
    return (react_1.default.createElement("div", { className: "spinner" },
        react_1.default.createElement("h3", null, "Loading"),
        react_1.default.createElement("img", { src: loading_svg_1.default, alt: "Loading" })));
};
exports.default = LoadingSpinner;
