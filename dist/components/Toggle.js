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
var Toggle = (function (_super) {
    __extends(Toggle, _super);
    function Toggle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toggle.prototype.getModifierObject = function () {
        return {
            size: this.props.size,
            color: this.props.color,
            checked: this.props.checked,
            disabled: this.props.disabled
        };
    };
    Toggle.prototype.isChecked = function () {
        return this.props.checked || false;
    };
    Toggle.prototype.onClick = function (e) {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(!this.props.checked, e);
        }
    };
    Toggle.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: this.getBlockName('toggle', this.getModifierObject()), role: "checkbox", tabIndex: 0, "aria-checked": this.isChecked().toString(), onClick: function (e) { return _this.onClick(e); } },
            React.createElement("div", { className: this.getElementName('toggle', 'container') },
                React.createElement("div", { className: this.getElementName('toggle', 'line') }),
                React.createElement("div", { className: this.getElementName('toggle', 'handle') })),
            this.props.children ? (React.createElement("div", { className: this.getElementName('toggle', 'label') }, this.props.children)) : null));
    };
    return Toggle;
}(AbstractComponent_1.default));
exports.default = Toggle;
