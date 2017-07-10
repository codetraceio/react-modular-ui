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
var Form = (function (_super) {
    __extends(Form, _super);
    function Form() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Form.prototype.onChange = function (e) {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(e.target.name, e.target.value, e);
        }
    };
    Form.prototype.render = function () {
        return (react_1.default.createElement("form", { className: this.getBlockName('form'), action: this.props.action, method: this.props.method, name: this.props.name, target: this.props.target, onChange: this.onChange, onSubmit: this.props.onSubmit },
            react_1.default.createElement("input", { type: "submit", style: { display: 'none' } }),
            this.props.children));
    };
    return Form;
}(AbstractComponent_1.default));
exports.default = Form;
