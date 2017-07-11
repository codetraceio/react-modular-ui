"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AbstractComponent_1 = require("./AbstractComponent");
class Button extends AbstractComponent_1.default {
    constructor() {
        super();
        this.element = null;
        this.lineElement = null;
        this.optionElements = {};
    }
    componentDidMount() {
        this.updateLine();
    }
    componentDidUpdate() {
        this.updateLine();
    }
    getModifierObject() {
        return {
            size: this.props.size,
            color: this.props.color
        };
    }
    getOptionModifiers(option) {
        if (option.value === this.props.value) {
            return {
                selected: true
            };
        }
        return {};
    }
    setElement(element) {
        this.element = element;
    }
    setLineElement(element) {
        this.lineElement = element;
    }
    setOptionElement(name, element) {
        this.optionElements[name] = element;
    }
    updateLine() {
        const element = this.element;
        const lineElement = this.lineElement;
        const optionElement = this.optionElements[this.props.value];
        if (!element || !lineElement || !optionElement) {
            return;
        }
        const elementRect = element.getBoundingClientRect();
        const optionRect = optionElement.getBoundingClientRect();
        const left = optionRect.left - elementRect.left;
        const width = optionRect.right - optionRect.left;
        lineElement.style.left = `${left}px`;
        lineElement.style.width = `${width}px`;
    }
    onChange(value, option) {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(value, option);
        }
    }
    renderLine() {
        return (React.createElement("div", { ref: (element) => this.setLineElement(element), className: this.getElementName('tabs', 'line') }));
    }
    renderCount(option) {
        if (typeof option.count !== 'string' && typeof option.count !== 'number') {
            return null;
        }
        return (React.createElement("div", { className: this.getElementName('tabs', 'count', {
                countColor: option.countColor
            }) }, option.count));
    }
    renderOptions() {
        return this.props.options.map((option) => {
            return (React.createElement("div", { key: option.value, ref: (element) => this.setOptionElement(option.value.toString(), element), className: this.getElementName('tabs', 'option', this.getOptionModifiers(option), true), onClick: () => this.onChange(option.value, option) },
                React.createElement("div", null, option.title),
                this.renderCount(option)));
        });
    }
    render() {
        return (React.createElement("div", { ref: (element) => this.setElement(element), className: this.getBlockName('tabs', this.getModifierObject()) },
            this.renderLine(),
            this.renderOptions(),
            this.props.children));
    }
}
exports.default = Button;
