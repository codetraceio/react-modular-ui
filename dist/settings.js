"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Settings = (function () {
    function Settings() {
        this.prefix = 'c-';
        this.classes = {
            block: '{b}',
            element: '{b}--{e}',
            blockModifier: '-{m}',
            elementModifier: '-{m}',
            separator: '-'
        };
        this.icons = {};
        this.backend = false;
    }
    Settings.prototype.getClasses = function () {
        return this.classes;
    };
    Settings.prototype.setClasses = function (classes) {
        this.classes = classes;
    };
    Settings.prototype.getPrefix = function () {
        return this.prefix;
    };
    Settings.prototype.setPrefix = function (prefix) {
        this.prefix = prefix;
    };
    Settings.prototype.getIcons = function () {
        return this.icons;
    };
    Settings.prototype.setIcons = function (icons) {
        this.icons = icons;
    };
    Settings.prototype.getIcon = function (name) {
        return this.icons[name];
    };
    Settings.prototype.isBackend = function () {
        return this.backend;
    };
    Settings.prototype.setBackend = function (backend) {
        this.backend = backend;
    };
    return Settings;
}());
exports.Settings = Settings;
exports.default = new Settings();
