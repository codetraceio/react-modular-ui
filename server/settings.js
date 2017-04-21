'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Settings = function () {
  function Settings() {
    _classCallCheck(this, Settings);

    this.prefix = 'c-';
    this.classes = {
      block: '{b}',
      element: '{b}--{e}',
      blockModifier: '-{m}',
      elementModifier: '-{m}',
      separator: '-'
    };
    this.icons = {};
    this.sizeMap = {
      '24': '16',
      '32': '24',
      '48': '32'
    };
    this.backend = false;
  }

  _createClass(Settings, [{
    key: 'getClasses',
    value: function getClasses() {
      return this.classes;
    }
  }, {
    key: 'setClasses',
    value: function setClasses(classes) {
      this.classes = classes;
    }
  }, {
    key: 'getPrefix',
    value: function getPrefix() {
      return this.prefix;
    }
  }, {
    key: 'setPrefix',
    value: function setPrefix(prefix) {
      this.prefix = prefix;
    }
  }, {
    key: 'getIcons',
    value: function getIcons() {
      return this.icons;
    }
  }, {
    key: 'setIcons',
    value: function setIcons(icons) {
      this.icons = icons;
    }
  }, {
    key: 'getIcon',
    value: function getIcon(name) {
      return this.icons[name];
    }
  }, {
    key: 'getSize',
    value: function getSize(size) {
      return this.sizeMap[size];
    }
  }, {
    key: 'getSizeMap',
    value: function getSizeMap() {
      return this.sizeMap;
    }
  }, {
    key: 'setSizeMap',
    value: function setSizeMap(sizeMap) {
      this.sizeMap = sizeMap;
    }
  }, {
    key: 'isBackend',
    value: function isBackend() {
      return this.backend;
    }
  }, {
    key: 'setBackend',
    value: function setBackend(backend) {
      this.backend = backend;
    }
  }]);

  return Settings;
}();

exports.default = new Settings();
module.exports = exports['default'];