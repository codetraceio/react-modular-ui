"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AbstractComponent_1 = require("./AbstractComponent");
class Form extends AbstractComponent_1.default {
    onChange(event) {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(event.target.name, event.target.value, event);
        }
    }
    render() {
        return (React.createElement("form", { className: this.getBlockName('form'), action: this.props.action, method: this.props.method, name: this.props.name, target: this.props.target, onChange: this.onChange, onSubmit: this.props.onSubmit },
            React.createElement("input", { type: "submit", style: { display: 'none' } }),
            this.props.children));
    }
}
exports.default = Form;
