"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AbstractComponent_1 = require("./AbstractComponent");
class Button extends AbstractComponent_1.default {
    getModifierObject() {
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
    }
    render() {
        return (React.createElement("div", { className: this.getBlockName('button', this.getModifierObject()), "data-name": this.props.name, tabIndex: 1, onClick: this.props.onClick }, this.props.children));
    }
}
exports.default = Button;
