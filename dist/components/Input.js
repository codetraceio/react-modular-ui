"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AbstractComponent_1 = require("./AbstractComponent");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.getModifierObject = function () {
        return {
            size: this.props.size,
            view: this.props.view,
            color: this.props.color,
            disabled: this.props.disabled
        };
    };
    Input.prototype.onEvent = function (event, callback) {
        if (typeof callback === 'function') {
            callback(event.currentTarget.value, event);
        }
    };
    Input.prototype.renderLabel = function () {
        return this.props.label ? (React.createElement("div", { className: this.getElementName('input', 'label') }, this.props.label)) : null;
    };
    Input.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: this.getBlockName('input', this.getModifierObject()) },
            this.renderLabel(),
            React.createElement("input", { name: this.props.name, placeholder: this.props.placeholder, value: this.props.value, disabled: this.props.disabled, onChange: function (event) { return _this.onEvent(event, _this.props.onChange); }, onKeyDown: function (event) { return _this.onEvent(event, _this.props.onKeyDown); }, onKeyUp: function (event) { return _this.onEvent(event, _this.props.onKeyUp); }, onKeyPress: function (event) { return _this.onEvent(event, _this.props.onKeyPress); }, onFocus: function (event) { return _this.onEvent(event, _this.props.onFocus); }, onBlur: function (event) { return _this.onEvent(event, _this.props.onBlur); } })));
    };
    return Input;
}(AbstractComponent_1.default));
exports.default = Input;
