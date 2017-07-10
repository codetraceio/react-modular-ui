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
var Progress = (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.getModifierObject = function () {
        return {
            size: this.props.size,
            color: this.props.color
        };
    };
    Progress.prototype.render = function () {
        return (react_1.default.createElement("div", { className: this.getBlockName('progress', this.getModifierObject()) },
            react_1.default.createElement("div", { className: this.getElementName('progress', 'line'), style: { width: this.props.value.toString() + "%" } })));
    };
    return Progress;
}(AbstractComponent_1.default));
exports.default = Progress;
