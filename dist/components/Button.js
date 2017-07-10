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
            shape: this.props.shape,
            disabled: this.props.disabled,
            padding: this.props.padding,
            paddingLeft: this.props.paddingLeft,
            paddingRight: this.props.paddingRight
        };
    };
    Button.prototype.render = function () {
        return (React.createElement("div", { className: this.getBlockName('button', this.getModifierObject()), "data-name": this.props.name, tabIndex: 1, onClick: this.props.onClick }, this.props.children));
    };
    return Button;
}(AbstractComponent_1.default));
exports.default = Button;
