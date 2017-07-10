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
var settings_1 = require("../settings");
var AbstractComponent_1 = require("./AbstractComponent");
var Icon_1 = require("./Icon");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.getModifierObject = function () {
        return {
            size: this.props.size,
            view: this.props.view,
            color: this.props.color,
            disabled: this.props.disabled
        };
    };
    Button.prototype.isChecked = function () {
        return this.props.checked || false;
    };
    Button.prototype.onChange = function (e) {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(!this.props.checked, e);
        }
    };
    Button.prototype.render = function () {
        var _this = this;
        if (settings_1.default.isBackend()) {
            return (React.createElement("div", { className: this.getBlockName('checkbox', this.getModifierObject()), role: "checkbox", tabIndex: 1, "data-name": this.props.name, "aria-checked": this.isChecked().toString() },
                React.createElement("div", null,
                    React.createElement("div", { className: this.getElementName('checkbox', 'icon', {
                            checked: true
                        }) },
                        React.createElement(Icon_1.default, { size: this.props.size, name: 'checkbox-checked' })),
                    React.createElement("div", { className: this.getElementName('checkbox', 'icon', {
                            notChecked: true
                        }) },
                        React.createElement(Icon_1.default, { size: this.props.size, name: 'checkbox' }))),
                React.createElement("div", null, this.props.children)));
        }
        return (React.createElement("div", { className: this.getBlockName('checkbox', this.getModifierObject()), "data-name": this.props.name, "aria-checked": this.isChecked().toString(), tabIndex: 1, onClick: function (e) { return _this.onChange(e); } },
            React.createElement("div", { className: this.getElementName('checkbox', 'icon') }, this.props.checked ? (React.createElement(Icon_1.default, { size: this.props.size, name: "checkbox" })) : null),
            React.createElement("div", null, this.props.children)));
    };
    return Button;
}(AbstractComponent_1.default));
exports.default = Button;
