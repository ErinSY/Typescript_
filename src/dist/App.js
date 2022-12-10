"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
function App() {
    // const [username, setuseName] = useState('');
    // const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //   console.log(event.currentTarget.value);
    //   const {
    //     currentTarget: { value },
    //   } = event;
    //   setuseName(value);
    // };
    // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //   event.preventDefault();
    //   console.log('hello', username);
    // };
    var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n  "], ["\n    background-color: ", ";\n  "])), function (props) { return props.theme.bgColor; });
    var H1 = styled_components_1["default"].h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), function (props) { return props.theme.textColor; });
    return (react_1["default"].createElement(Container, null,
        react_1["default"].createElement(H1, null, "Hihihi")));
}
exports["default"] = App;
var templateObject_1, templateObject_2;
