"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const settings_1 = require("../settings");
const AbstractComponent_1 = require("./AbstractComponent");
const Icon_1 = require("./Icon");
class Radio extends AbstractComponent_1.default {
    getModifierObject() {
        return {
            size: this.props.size,
            view: this.props.view,
            color: this.props.color,
            disabled: this.props.disabled
        };
    }
    onChange(e) {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(this.props.value, e);
        }
    }
    render() {
        if (settings_1.default.isBackend()) {
            return (React.createElement("div", { className: this.getBlockName('radio', this.getModifierObject()), role: "radio", tabIndex: 1, "data-name": this.props.name, "aria-checked": this.props.checked.toString() },
                React.createElement("div", null,
                    React.createElement("div", { className: this.getElementName('radio', 'icon', {
                            notChecked: true
                        }) }),
                    React.createElement("div", { className: this.getElementName('radio', 'icon', {
                            checked: true
                        }) },
                        React.createElement(Icon_1.default, { size: this.props.size, name: 'radio' }))),
                React.createElement("div", null, this.props.children)));
        }
        return (React.createElement("div", { className: this.getBlockName('radio', this.getModifierObject()), "data-name": this.props.name, tabIndex: 1, onClick: (e) => this.onChange(e) },
            React.createElement("div", { className: this.getElementName('radio', 'icon') }, this.props.checked ? (React.createElement(Icon_1.default, { size: this.props.size, name: "radio" })) : null),
            React.createElement("div", null, this.props.children)));
    }
}
exports.default = Radio;
