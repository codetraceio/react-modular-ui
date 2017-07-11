"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AbstractComponent_1 = require("./AbstractComponent");
class Pill extends AbstractComponent_1.default {
    getModifierObject() {
        return {
            size: this.props.size,
            color: this.props.color
        };
    }
    render() {
        return (React.createElement("div", { className: this.getBlockName('pill', this.getModifierObject()) },
            React.createElement("div", null, this.props.children)));
    }
}
exports.default = Pill;
