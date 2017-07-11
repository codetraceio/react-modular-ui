"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AbstractComponent_1 = require("./AbstractComponent");
class Input extends AbstractComponent_1.default {
    getModifierObject() {
        return {
            size: this.props.size,
            view: this.props.view,
            color: this.props.color,
            disabled: this.props.disabled
        };
    }
    onEvent(event, callback) {
        if (typeof callback === 'function') {
            callback(event.currentTarget.value, event);
        }
    }
    renderLabel() {
        return this.props.label ? (React.createElement("div", { className: this.getElementName('input', 'label') }, this.props.label)) : null;
    }
    render() {
        return (React.createElement("div", { className: this.getBlockName('input', this.getModifierObject()) },
            this.renderLabel(),
            React.createElement("input", { name: this.props.name, placeholder: this.props.placeholder, value: this.props.value, disabled: this.props.disabled, onChange: (event) => this.onEvent(event, this.props.onChange), onKeyDown: (event) => this.onEvent(event, this.props.onKeyDown), onKeyUp: (event) => this.onEvent(event, this.props.onKeyUp), onKeyPress: (event) => this.onEvent(event, this.props.onKeyPress), onFocus: (event) => this.onEvent(event, this.props.onFocus), onBlur: (event) => this.onEvent(event, this.props.onBlur) })));
    }
}
exports.default = Input;
