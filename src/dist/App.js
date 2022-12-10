"use strict";
exports.__esModule = true;
var react_1 = require("react");
function App() {
    var _a = react_1.useState(''), username = _a[0], setuseName = _a[1];
    var onChange = function (event) {
        console.log(event.currentTarget.value);
        var value = event.currentTarget.value;
        setuseName(value);
    };
    var onSubmit = function (event) {
        event.preventDefault();
        console.log('hello', username);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("form", { onSubmit: onSubmit },
            react_1["default"].createElement("input", { type: 'text', placeholder: 'username', value: username, onChange: onChange }),
            react_1["default"].createElement("button", null, "submit"))));
}
exports["default"] = App;
