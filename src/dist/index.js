"use strict";
exports.__esModule = true;
var client_1 = require("react-dom/client");
var styled_components_1 = require("styled-components");
var theme_1 = require("./theme");
var App_1 = require("./App");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(React.createElement(styled_components_1.ThemeProvider, { theme: theme_1.DarkTheme },
    React.createElement(App_1["default"], null)));
