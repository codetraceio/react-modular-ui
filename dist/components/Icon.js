"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AbstractComponent_1 = require("./AbstractComponent");
const settings_1 = require("../settings");
class Button extends AbstractComponent_1.default {
    getModifierObject() {
        return {
            size: this.props.size,
            width: this.props.width,
            height: this.props.height,
            color: this.props.color,
            rotate: this.props.rotate
        };
    }
    render() {
        return (React.createElement("div", { className: this.getBlockName('icon', this.getModifierObject()), onClick: this.props.onClick }, settings_1.default.getIcon(this.props.name)));
    }
}
exports.default = Button;
