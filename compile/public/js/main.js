"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var model_1 = require("./model");
var jquery_1 = __importDefault(require("jquery"));
var react_router_dom_1 = require("react-router-dom");
var home_1 = __importDefault(require("./modules/home/home"));
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.studentName = react_1.default.createRef();
        _this.state = {
            student: _this.props.studentName ? new model_1.Student(_this.props.studentName) : null
        };
        _this._onSay = _this._onSay.bind(_this);
        return _this;
    }
    App.prototype._onSay = function () {
        var l_input = this.studentName.current;
        if (l_input) {
            var $input = jquery_1.default(l_input);
            this.setState({
                student: l_input.value ? new model_1.Student(l_input.value) : null
            });
        }
    };
    App.prototype.render = function () {
        var student = this.state.student;
        return (react_1.default.createElement("div", { className: 'app-main' }, this.props.children));
    };
    return App;
}(react_1.default.Component));
react_dom_1.default.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
    react_1.default.createElement(App, null,
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", render: function (props) { return react_1.default.createElement(home_1.default, __assign({}, props)); } })))), document.getElementById('divMainBody'));
