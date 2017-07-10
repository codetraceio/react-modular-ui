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
var Block = (function (_super) {
    __extends(Block, _super);
    function Block() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Block.prototype.getModifierObject = function () {
        var _this = this;
        var modifiers = {
            layout: this.props.layout,
            wrap: this.props.wrap,
            padding: this.props.padding,
            margin: this.props.margin,
            hide: this.props.hide,
            fit: this.props.fit,
            grow: this.props.grow,
            shrink: this.props.shrink,
            order: this.props.order,
            grid: this.props.grid,
            align: this.props.align,
            justify: this.props.justify,
            scroll: this.props.scroll,
            spaceHorizontal: this.props.spaceHorizontal,
            spaceVertical: this.props.spaceVertical,
            height: this.props.height,
            width: this.props.width
        };
        if (this.props.modifiers) {
            this.props.modifiers.forEach(function (key) {
                modifiers[key] = _this.props[key];
            });
        }
        return modifiers;
    };
    Block.prototype.render = function () {
        return (React.createElement("div", { className: this.getBlockName('block', this.getModifierObject()) }, this.props.children));
    };
    return Block;
}(AbstractComponent_1.default));
exports.default = Block;
