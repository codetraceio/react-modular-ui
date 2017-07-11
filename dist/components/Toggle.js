"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AbstractComponent_1 = require("./AbstractComponent");
class Toggle extends AbstractComponent_1.default {
    getModifierObject() {
        return {
            size: this.props.size,
            color: this.props.color,
            checked: this.props.checked,
            disabled: this.props.disabled
        };
    }
    isChecked() {
        return this.props.checked || false;
    }
    onClick(e) {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(!this.props.checked, e);
        }
    }
    render() {
        return (React.createElement("div", { className: this.getBlockName('toggle', this.getModifierObject()), role: "checkbox", tabIndex: 0, "aria-checked": this.isChecked().toString(), onClick: (e) => this.onClick(e) },
            React.createElement("div", { className: this.getElementName('toggle', 'container') },
                React.createElement("div", { className: this.getElementName('toggle', 'line') }),
                React.createElement("div", { className: this.getElementName('toggle', 'handle') })),
            this.props.children ? (React.createElement("div", { className: this.getElementName('toggle', 'label') }, this.props.children)) : null));
    }
}
exports.default = Toggle;
