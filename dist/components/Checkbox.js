"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const settings_1 = require("../settings");
const AbstractComponent_1 = require("./AbstractComponent");
const Icon_1 = require("./Icon");
class Button extends AbstractComponent_1.default {
    getModifierObject() {
        return {
            size: this.props.size,
            view: this.props.view,
            color: this.props.color,
            disabled: this.props.disabled
        };
    }
    isChecked() {
        return this.props.checked || false;
    }
    onChange(e) {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(!this.props.checked, e);
        }
    }
    render() {
        if (settings_1.default.isBackend()) {
            return (React.createElement("div", { className: this.getBlockName('checkbox', this.getModifierObject()), role: "checkbox", tabIndex: 1, "data-name": this.props.name, "aria-checked": this.isChecked().toString() },
                React.createElement("div", null,
                    React.createElement("div", { className: this.getElementName('checkbox', 'icon', {
                            checked: true
                        }) },
                        React.createElement(Icon_1.default, { size: this.props.size, name: 'checkbox-checked' })),
                    React.createElement("div", { className: this.getElementName('checkbox', 'icon', {
                            notChecked: true
                        }) },
                        React.createElement(Icon_1.default, { size: this.props.size, name: 'checkbox' }))),
                React.createElement("div", null, this.props.children)));
        }
        return (React.createElement("div", { className: this.getBlockName('checkbox', this.getModifierObject()), "data-name": this.props.name, "aria-checked": this.isChecked().toString(), tabIndex: 1, onClick: (e) => this.onChange(e) },
            React.createElement("div", { className: this.getElementName('checkbox', 'icon') }, this.props.checked ? (React.createElement(Icon_1.default, { size: this.props.size, name: "checkbox" })) : null),
            React.createElement("div", null, this.props.children)));
    }
}
exports.default = Button;
