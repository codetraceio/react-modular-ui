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
var settings_1 = require("../settings");
var AbstractComponent_1 = require("./AbstractComponent");
var Icon_1 = require("./Icon");
var Radio = (function (_super) {
    __extends(Radio, _super);
    function Radio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radio.prototype.getModifierObject = function () {
        return {
            size: this.props.size,
            view: this.props.view,
            color: this.props.color,
            disabled: this.props.disabled
        };
    };
    Radio.prototype.onChange = function (e) {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(this.props.value, e);
        }
    };
    Radio.prototype.render = function () {
        var _this = this;
        if (settings_1.default.isBackend()) {
            return (react_1.default.createElement("div", { className: this.getBlockName('radio', this.getModifierObject()), role: "radio", tabIndex: "1", "data-name": this.props.name, "aria-checked": this.props.checked.toString() },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { className: this.getElementName('radio', 'icon', {
                            notChecked: true
                        }) }),
                    react_1.default.createElement("div", { className: this.getElementName('radio', 'icon', {
                            checked: true
                        }) },
                        react_1.default.createElement(Icon_1.default, { size: this.props.size, name: 'radio' }))),
                react_1.default.createElement("div", null, this.props.children)));
        }
        return (react_1.default.createElement("div", { className: this.getBlockName('radio', this.getModifierObject()), "data-name": this.props.name, tabIndex: "1", onClick: function (e) { return _this.onChange(e); } },
            react_1.default.createElement("div", { className: this.getElementName('radio', 'icon') }, this.props.checked ? (react_1.default.createElement(Icon_1.default, { size: this.props.size, name: "radio" })) : null),
            react_1.default.createElement("div", null, this.props.children)));
    };
    return Radio;
}(AbstractComponent_1.default));
exports.default = Radio;
