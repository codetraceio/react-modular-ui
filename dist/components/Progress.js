"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AbstractComponent_1 = require("./AbstractComponent");
class Progress extends AbstractComponent_1.default {
    getModifierObject() {
        return {
            size: this.props.size,
            color: this.props.color
        };
    }
    render() {
        return (React.createElement("div", { className: this.getBlockName('progress', this.getModifierObject()) },
            React.createElement("div", { className: this.getElementName('progress', 'line'), style: { width: `${this.props.value.toString()}%` } })));
    }
}
exports.default = Progress;
