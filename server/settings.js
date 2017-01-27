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
    this.icons = {};
    this.sizeMap = {
      '24': '16',
      '32': '24',
      '48': '32'
    };
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

  getSize(size) {
    return this.sizeMap[size];
  }

  getSizeMap() {
    return this.sizeMap;
  }

  setSizeMap(sizeMap) {
    this.sizeMap = sizeMap;
  }
}

exports.default = new Settings();
module.exports = exports['default'];