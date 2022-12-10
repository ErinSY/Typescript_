"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background-color: ", ";\n  border: 1px solid ", ";\n"], ["\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  background-color: ", ";\n  border: 1px solid ", ";\n"])), function (props) { return props.bgColor; }, function (props) { return props.borderColor; });
// export default function Circle({ bgColor }: CircleProps) {
function Circle(props) {
    var _a, _b;
    return (React.createElement(Container, { bgColor: props.bgColor, borderColor: (_a = props.borderColor) !== null && _a !== void 0 ? _a : 'green' }, (_b = props.text) !== null && _b !== void 0 ? _b : '디폴트입니다.'));
}
exports["default"] = Circle;
var templateObject_1;
