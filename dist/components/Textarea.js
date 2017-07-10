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
var react_1 = require("react");
var AbstractComponent_1 = require("./AbstractComponent");
var Textarea = (function (_super) {
    __extends(Textarea, _super);
    function Textarea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Textarea.prototype.getModifierObject = function () {
        return {
            size: this.props.size,
            view: this.props.view,
            color: this.props.color,
            disabled: this.props.disabled
        };
    };
    Textarea.prototype.getStyle = function () {
        var style = {};
        if (this.props.height) {
            style.height = this.props.height + "px";
        }
        return style;
    };
    Textarea.prototype.delegateEvent = function (eventName) {
        var _this = this;
        return function (event) {
            if (typeof _this.props[eventName] === 'function') {
                _this.props[eventName](event.target.value, event);
            }
        };
    };
    Textarea.prototype.renderLabel = function () {
        return this.props.label ? (react_1.default.createElement("div", { className: this.getElementName('textarea', 'label') }, this.props.label)) : null;
    };
    Textarea.prototype.render = function () {
        return (react_1.default.createElement("div", { className: this.getBlockName('textarea', this.getModifierObject()) },
            this.renderLabel(),
            react_1.default.createElement("textarea", { name: this.props.name, placeholder: this.props.placeholder, value: this.props.value, disabled: this.props.disabled, style: this.getStyle(), onChange: this.delegateEvent('onChange'), onKeyDown: this.delegateEvent('onKeyDown'), onKeyUp: this.delegateEvent('onKeyUp'), onKeyPress: this.delegateEvent('onKeyPress'), onFocus: this.delegateEvent('onFocus'), onBlur: this.delegateEvent('onBlur') })));
    };
    return Textarea;
}(AbstractComponent_1.default));
exports.default = Textarea;
