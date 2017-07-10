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
var TextArea = (function (_super) {
    __extends(TextArea, _super);
    function TextArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextArea.prototype.getModifierObject = function () {
        return {
            size: this.props.size,
            view: this.props.view,
            color: this.props.color,
            disabled: this.props.disabled
        };
    };
    TextArea.prototype.getStyle = function () {
        var style = {};
        if (this.props.height) {
            style.height = this.props.height.toString() + "px";
        }
        return style;
    };
    TextArea.prototype.onEvent = function (event, callback) {
        if (typeof callback === 'function') {
            callback(event.currentTarget.value, event);
        }
    };
    TextArea.prototype.renderLabel = function () {
        return this.props.label ? (React.createElement("div", { className: this.getElementName('textarea', 'label') }, this.props.label)) : null;
    };
    TextArea.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: this.getBlockName('textarea', this.getModifierObject()) },
            this.renderLabel(),
            React.createElement("textarea", { name: this.props.name, placeholder: this.props.placeholder, value: this.props.value, disabled: this.props.disabled, style: this.getStyle(), onChange: function (event) { return _this.onEvent(event, _this.props.onChange); }, onKeyDown: function (event) { return _this.onEvent(event, _this.props.onKeyDown); }, onKeyUp: function (event) { return _this.onEvent(event, _this.props.onKeyUp); }, onKeyPress: function (event) { return _this.onEvent(event, _this.props.onKeyPress); }, onFocus: function (event) { return _this.onEvent(event, _this.props.onFocus); }, onBlur: function (event) { return _this.onEvent(event, _this.props.onBlur); } })));
    };
    return TextArea;
}(AbstractComponent_1.default));
exports.default = TextArea;
