"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AbstractComponent_1 = require("./AbstractComponent");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super.call(this) || this;
        _this.element = null;
        _this.lineElement = null;
        _this.optionElements = {};
        return _this;
    }
    Button.prototype.componentDidMount = function () {
        this.updateLine();
    };
    Button.prototype.componentDidUpdate = function () {
        this.updateLine();
    };
    Button.prototype.getModifierObject = function () {
        return {
            size: this.props.size,
            color: this.props.color
        };
    };
    Button.prototype.getOptionModifiers = function (option) {
        if (option.value === this.props.value) {
            return {
                selected: true
            };
        }
        return {};
    };
    Button.prototype.setElement = function (element) {
        this.element = element;
    };
    Button.prototype.setLineElement = function (element) {
        this.lineElement = element;
    };
    Button.prototype.setOptionElement = function (name, element) {
        this.optionElements[name] = element;
    };
    Button.prototype.updateLine = function () {
        var element = this.element;
        var lineElement = this.lineElement;
        var optionElement = this.optionElements[this.props.value];
        if (!element || !lineElement || !optionElement) {
            return;
        }
        var elementRect = element.getBoundingClientRect();
        var optionRect = optionElement.getBoundingClientRect();
        var left = optionRect.left - elementRect.left;
        var width = optionRect.right - optionRect.left;
        lineElement.style.left = left + "px";
        lineElement.style.width = width + "px";
    };
    Button.prototype.onChange = function (value, option) {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(value, option);
        }
    };
    Button.prototype.renderLine = function () {
        var _this = this;
        return (React.createElement("div", { ref: function (element) { return _this.setLineElement(element); }, className: this.getElementName('tabs', 'line') }));
    };
    Button.prototype.renderCount = function (option) {
        if (typeof option.count !== 'string' && typeof option.count !== 'number') {
            return null;
        }
        return (React.createElement("div", { className: this.getElementName('tabs', 'count', {
                countColor: option.countColor
            }) }, option.count));
    };
    Button.prototype.renderOptions = function () {
        var _this = this;
        return this.props.options.map(function (option) {
            return (React.createElement("div", { key: option.value, ref: function (element) { return _this.setOptionElement(option.value.toString(), element); }, className: _this.getElementName('tabs', 'option', _this.getOptionModifiers(option), true), onClick: function () { return _this.onChange(option.value, option); } },
                React.createElement("div", null, option.title),
                _this.renderCount(option)));
        });
    };
    Button.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { ref: function (element) { return _this.setElement(element); }, className: this.getBlockName('tabs', this.getModifierObject()) },
            this.renderLine(),
            this.renderOptions(),
            this.props.children));
    };
    return Button;
}(AbstractComponent_1.default));
exports.default = Button;
