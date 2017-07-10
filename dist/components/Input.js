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
    Input.prototype.delegateEvent = function (eventName) {
        var _this = this;
        return function (event) {
            if (typeof _this.props[eventName] === 'function') {
                _this.props[eventName](event.target.value, event);
            }
        };
    };
    Input.prototype.renderLabel = function () {
        return this.props.label ? (react_1.default.createElement("div", { className: this.getElementName('input', 'label') }, this.props.label)) : null;
    };
    Input.prototype.render = function () {
        return (react_1.default.createElement("div", { className: this.getBlockName('input', this.getModifierObject()) },
            this.renderLabel(),
            react_1.default.createElement("input", { name: this.props.name, placeholder: this.props.placeholder, value: this.props.value, disabled: this.props.disabled, onChange: this.delegateEvent('onChange'), onKeyDown: this.delegateEvent('onKeyDown'), onKeyUp: this.delegateEvent('onKeyUp'), onKeyPress: this.delegateEvent('onKeyPress'), onFocus: this.delegateEvent('onFocus'), onBlur: this.delegateEvent('onBlur') })));
    };
    return Input;
}(AbstractComponent_1.default));
exports.default = Input;
