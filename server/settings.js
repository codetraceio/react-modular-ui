'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Settings {
  constructor() {
    this.prefix = 'c-';
    this.classes = {
      block: '{b}',
      element: '{b}--{e}',
      blockModifier: '-{m}',
      blockModifierWithValue: '-{mk}-{mv}',
      elementModifier: '-{m}',
      elementModifierWithValue: '-{mk}-{mv}'
    };
    this.iconService = {};
  }

  getClasses() {
    return this.classes;
  }

  setClasses(classes) {
    this.classes = classes;
  }

  getPrefix() {
    return this.prefix;
  }

  setPrefix(prefix) {
    this.prefix = prefix;
  }

  getIcons() {
    return this.icons;
  }

  setIcons(icons) {
    this.icons = icons;
  }

  getIcon(name) {
    return this.icons[name];
  }
}

exports.default = new Settings();
module.exports = exports['default'];