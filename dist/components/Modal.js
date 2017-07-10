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
var Portal_1 = require("./Portal");
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.onClose = function () {
        if (typeof this.props.onClose === 'function') {
            this.props.onClose();
        }
    };
    Modal.prototype.onClickContent = function (event) {
        event.stopPropagation();
    };
    Modal.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(Portal_1.default, { show: this.props.show, portal: this.props.portal, portalKey: this.props.name },
            react_1.default.createElement("div", { className: this.getBlockClassName('modal'), onClick: function () { return _this.onClose(); } },
                react_1.default.createElement("div", { className: this.getElementClassName('modal', 'content'), onClick: function (event) { return _this.onClickContent(event); } }, this.props.children))));
    };
    return Modal;
}(AbstractComponent_1.default));
exports.default = Modal;
