'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractComponent = function (_React$Component) {
  _inherits(AbstractComponent, _React$Component);

  function AbstractComponent() {
    _classCallCheck(this, AbstractComponent);

    return _possibleConstructorReturn(this, (AbstractComponent.__proto__ || Object.getPrototypeOf(AbstractComponent)).apply(this, arguments));
  }

  _createClass(AbstractComponent, [{
    key: 'getModifier',
    value: function getModifier() {
      for (var _len = arguments.length, modifiers = Array(_len), _key = 0; _key < _len; _key++) {
        modifiers[_key] = arguments[_key];
      }

      return modifiers.filter(function (m) {
        return m !== '';
      }).join(_settings2.default.getClasses().separator);
    }
  }, {
    key: 'getBlockClassName',
    value: function getBlockClassName(blockName) {
      return '' + _settings2.default.getPrefix() + _settings2.default.getClasses().block.replace('{b}', this.camelCaseToDashCase(blockName));
    }
  }, {
    key: 'getElementClassName',
    value: function getElementClassName(blockName, elementName) {
      return '' + _settings2.default.getPrefix() + _settings2.default.getClasses().element.replace('{b}', this.camelCaseToDashCase(blockName)).replace('{e}', this.camelCaseToDashCase(elementName));
    }
  }, {
    key: 'getBlockModifierClassName',
    value: function getBlockModifierClassName(blockName, modifierName) {
      return _settings2.default.getClasses().blockModifier.replace('{b}', this.camelCaseToDashCase(blockName)).replace('{m}', this.camelCaseToDashCase(modifierName));
    }
  }, {
    key: 'getElementModifierClassName',
    value: function getElementModifierClassName(blockName, elementName, modifierName) {
      return _settings2.default.getClasses().elementModifier.replace('{b}', this.camelCaseToDashCase(blockName)).replace('{e}', this.camelCaseToDashCase(elementName)).replace('{m}', this.camelCaseToDashCase(modifierName));
    }
  }, {
    key: 'getComplexModifierValues',
    value: function getComplexModifierValues(modifierValue) {
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
    }
  }, {
    key: 'getBlockModifierWithComplexValueClassName',
    value: function getBlockModifierWithComplexValueClassName(blockName, modifierKey, modifierValue) {
      var _this2 = this;

      var modifierMedia = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

      var modifierValues = this.getComplexModifierValues(modifierValue);
      return Object.keys(modifierValues).filter(function (key) {
        return modifierValues[key] !== '0';
      }).map(function (key) {
        var newModifierKey = key === 'default' ? modifierKey : modifierKey + '-' + key;
        return _this2.getBlockModifierClassName(blockName, _this2.getModifier(newModifierKey, modifierValues[key], modifierMedia));
      }).join(' ');
    }
  }, {
    key: 'getElementModifierWithComplexValueClassName',
    value: function getElementModifierWithComplexValueClassName(blockName, elementName, modifierKey, modifierValue) {
      var _this3 = this;

      var modifierMedia = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

      var modifierValues = this.getComplexModifierValues(modifierValue);
      return Object.keys(modifierValues).filter(function (key) {
        return modifierValues[key] !== '0';
      }).map(function (key) {
        var newModifierKey = key === 'default' ? modifierKey : modifierKey + '-' + key;
        return _this3.getElementModifierClassName(blockName, elementName, _this3.getModifier(newModifierKey, modifierValues[key], modifierMedia));
      }).join(' ');
    }
  }, {
    key: 'getBlockName',
    value: function getBlockName(blockName, modifiers) {
      var blockNameClass = this.getBlockClassName(blockName);
      var modifiersClass = this.getModifiers(blockName, null, modifiers);

      if (modifiersClass !== '') {
        return blockNameClass + ' ' + modifiersClass;
      }

      return blockNameClass;
    }
  }, {
    key: 'getElementName',
    value: function getElementName(blockName, elementName, modifiers, isStatic) {
      var elementNameClass = this.getElementClassName(blockName, elementName);

      var modifiersClass = this.getModifiers(blockName, elementName, modifiers, isStatic);

      if (modifiersClass !== '') {
        return elementNameClass + ' ' + modifiersClass;
      }

      return elementNameClass;
    }
  }, {
    key: 'getModifiers',
    value: function getModifiers(blockName, elementName, modifiers, isStatic) {
      var _this4 = this;

      if ((typeof modifiers === 'undefined' ? 'undefined' : _typeof(modifiers)) !== 'object') {
        return '';
      }

      return Object.keys(modifiers).map(function (key) {
        var value = modifiers[key];
        if (typeof value === 'boolean' && value === true || isStatic) {
          if (elementName) {
            return _this4.getElementModifierClassName(blockName, elementName, key);
          }

          return _this4.getBlockModifierClassName(blockName, key);
        }

        if (typeof value === 'string' || typeof value === 'number') {
          if (elementName) {
            return _this4.getElementModifierWithComplexValueClassName(blockName, elementName, key, value.toString());
          }

          return _this4.getBlockModifierWithComplexValueClassName(blockName, key, value.toString());
        }

        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          var result = [];
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
                result.push(_this4.getElementModifierWithComplexValueClassName(blockName, elementName, key, className, media));
              } else {
                result.push(_this4.getElementModifierClassName(blockName, elementName, _this4.getModifier(key, media)));
              }
            } else {
              if (className !== '') {
                result.push(_this4.getBlockModifierWithComplexValueClassName(blockName, key, className, media));
              } else {
                result.push(_this4.getBlockModifierClassName(blockName, _this4.getModifier(key, media)));
              }
            }
          });
          return result.join(' ');
        }

        return '';
      }).filter(function (modifier) {
        return modifier !== '';
      }).join(' ');
    }
  }, {
    key: 'camelCaseToDashCase',
    value: function camelCaseToDashCase(word) {
      return word.replace(/([A-Z])/g, function (match) {
        return '-' + match.toLowerCase();
      });
    }
  }]);

  return AbstractComponent;
}(_react2.default.Component);

exports.default = AbstractComponent;