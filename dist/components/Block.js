"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AbstractComponent_1 = require("./AbstractComponent");
class Block extends AbstractComponent_1.default {
    getModifierObject() {
        return Object.assign({ layout: this.props.layout, wrap: this.props.wrap, padding: this.props.padding, margin: this.props.margin, hide: this.props.hide, fit: this.props.fit, grow: this.props.grow, shrink: this.props.shrink, order: this.props.order, grid: this.props.grid, align: this.props.align, justify: this.props.justify, scroll: this.props.scroll, spaceHorizontal: this.props.spaceHorizontal, spaceVertical: this.props.spaceVertical, height: this.props.height, width: this.props.width }, this.props.modifiers);
    }
    render() {
        return (React.createElement("div", { className: this.getBlockName('block', this.getModifierObject()) }, this.props.children));
    }
}
exports.default = Block;
