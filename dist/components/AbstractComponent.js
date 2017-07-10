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
var settings_1 = require("../settings");
var AbstractComponent = (function (_super) {
    __extends(AbstractComponent, _super);
    function AbstractComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractComponent.prototype.getModifier = function () {
        var modifiers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modifiers[_i] = arguments[_i];
        }
        return modifiers.filter(function (m) { return m !== ''; }).join(settings_1.default.getClasses().separator);
    };
    AbstractComponent.prototype.getBlockClassName = function (blockName) {
        return "" + settings_1.default.getPrefix() + settings_1.default.getClasses().block
            .replace('{b}', this.camelCaseToDashCase(blockName));
    };
    AbstractComponent.prototype.getElementClassName = function (blockName, elementName) {
        return "" + settings_1.default.getPrefix() + settings_1.default.getClasses().element
            .replace('{b}', this.camelCaseToDashCase(blockName))
            .replace('{e}', this.camelCaseToDashCase(elementName));
    };
    AbstractComponent.prototype.getBlockModifierClassName = function (blockName, modifierName) {
        return settings_1.default.getClasses().blockModifier
            .replace('{b}', this.camelCaseToDashCase(blockName))
            .replace('{m}', this.camelCaseToDashCase(modifierName));
    };
    AbstractComponent.prototype.getElementModifierClassName = function (blockName, elementName, modifierName) {
        return settings_1.default.getClasses().elementModifier
            .replace('{b}', this.camelCaseToDashCase(blockName))
            .replace('{e}', this.camelCaseToDashCase(elementName))
            .replace('{m}', this.camelCaseToDashCase(modifierName));
    };
    AbstractComponent.prototype.getComplexModifierValues = function (modifierValue) {
        var modifierValues = modifierValue.split(' ');
        if (modifierValues.length === 1) {
            return {
                default: modifierValue
            };
        }
        if (modifierValues.length === 2) {
            return {
                vertical: modifierValues[0],
                horizontal: modifierValues[1]
            };
        }
        if (modifierValues.length === 3) {
            return {
                top: modifierValues[0],
                horizontal: modifierValues[1],
                bottom: modifierValues[2]
            };
        }
        if (modifierValues.length === 4) {
            return {
                top: modifierValues[0],
                right: modifierValues[1],
                bottom: modifierValues[2],
                left: modifierValues[3]
            };
        }
    };
    AbstractComponent.prototype.getBlockModifierWithComplexValueClassName = function (blockName, modifierKey, modifierValue, modifierMedia) {
        var _this = this;
        if (modifierMedia === void 0) { modifierMedia = ''; }
        var modifierValues = this.getComplexModifierValues(modifierValue);
        return Object.keys(modifierValues).filter(function (key) { return modifierValues[key] !== '0'; }).map(function (key) {
            var newModifierKey = key === 'default' ? modifierKey : modifierKey + "-" + key;
            return _this.getBlockModifierClassName(blockName, _this.getModifier(newModifierKey, modifierValues[key], modifierMedia));
        }).join(' ');
    };
    AbstractComponent.prototype.getElementModifierWithComplexValueClassName = function (blockName, elementName, modifierKey, modifierValue, modifierMedia) {
        var _this = this;
        if (modifierMedia === void 0) { modifierMedia = ''; }
        var modifierValues = this.getComplexModifierValues(modifierValue);
        return Object.keys(modifierValues).filter(function (key) { return modifierValues[key] !== '0'; }).map(function (key) {
            var newModifierKey = key === 'default' ? modifierKey : modifierKey + "-" + key;
            return _this.getElementModifierClassName(blockName, elementName, _this.getModifier(newModifierKey, modifierValues[key], modifierMedia));
        }).join(' ');
    };
    AbstractComponent.prototype.getBlockName = function (blockName, modifiers) {
        if (modifiers === void 0) { modifiers = {}; }
        var blockNameClass = this.getBlockClassName(blockName);
        var modifiersClass = this.getModifiers(blockName, null, modifiers);
        if (modifiersClass !== '') {
            return blockNameClass + " " + modifiersClass;
        }
        return blockNameClass;
    };
    AbstractComponent.prototype.getElementName = function (blockName, elementName, modifiers, isStatic) {
        if (modifiers === void 0) { modifiers = {}; }
        if (isStatic === void 0) { isStatic = false; }
        var elementNameClass = this.getElementClassName(blockName, elementName);
        var modifiersClass = this.getModifiers(blockName, elementName, modifiers, isStatic);
        if (modifiersClass !== '') {
            return elementNameClass + " " + modifiersClass;
        }
        return elementNameClass;
    };
    AbstractComponent.prototype.getModifiers = function (blockName, elementName, modifiers, isStatic) {
        var _this = this;
        if (isStatic === void 0) { isStatic = false; }
        if (typeof modifiers !== 'object') {
            return '';
        }
        return Object.keys(modifiers).map(function (key) {
            var value = modifiers[key];
            if ((typeof value === 'boolean' && value === true) || isStatic) {
                if (elementName) {
                    return _this.getElementModifierClassName(blockName, elementName, key);
                }
                return _this.getBlockModifierClassName(blockName, key);
            }
            if (typeof value === 'string' || typeof value === 'number') {
                if (elementName) {
                    return _this.getElementModifierWithComplexValueClassName(blockName, elementName, key, value.toString());
                }
                return _this.getBlockModifierWithComplexValueClassName(blockName, key, value.toString());
            }
            if (typeof value === 'object') {
                var result_1 = [];
                Object.keys(value).forEach(function (valueKey) {
                    var valueValue = value[valueKey];
                    if (typeof valueValue === 'boolean' && valueValue === false) {
                        return;
                    }
                    var className = '';
                    if (typeof valueValue === 'string' || typeof valueValue === 'number') {
                        className = valueValue.toString();
                    }
                    var media = valueKey;
                    if (elementName) {
                        if (className !== '') {
                            result_1.push(_this.getElementModifierWithComplexValueClassName(blockName, elementName, key, className, media));
                        }
                        else {
                            result_1.push(_this.getElementModifierClassName(blockName, elementName, _this.getModifier(key, media)));
                        }
                    }
                    else {
                        if (className !== '') {
                            result_1.push(_this.getBlockModifierWithComplexValueClassName(blockName, key, className, media));
                        }
                        else {
                            result_1.push(_this.getBlockModifierClassName(blockName, _this.getModifier(key, media)));
                        }
                    }
                });
                return result_1.join(' ');
            }
            return '';
        }).filter(function (modifier) { return modifier !== ''; }).join(' ');
    };
    AbstractComponent.prototype.camelCaseToDashCase = function (word) {
        return word.replace(/([A-Z])/g, function (match) {
            return "-" + match.toLowerCase();
        });
    };
    return AbstractComponent;
}(React.Component));
exports.default = AbstractComponent;
