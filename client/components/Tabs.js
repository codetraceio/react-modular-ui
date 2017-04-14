'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent2 = require('./AbstractComponent');

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

var _Pill = require('./Pill');

var _Pill2 = _interopRequireDefault(_Pill);

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_AbstractComponent) {
  _inherits(Button, _AbstractComponent);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.element = null;
    _this.lineElement = null;
    _this.optionElements = {};
    return _this;
  }

  _createClass(Button, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateLine();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateLine();
    }
  }, {
    key: 'getModifiers',
    value: function getModifiers() {
      return ['size', 'color'];
    }
  }, {
    key: 'getOptionModifiers',
    value: function getOptionModifiers(option) {
      if (option.value === this.props.value) {
        return ['selected'];
      }
      return [];
    }
  }, {
    key: 'setElement',
    value: function setElement(element) {
      this.element = element;
    }
  }, {
    key: 'setLineElement',
    value: function setLineElement(element) {
      this.lineElement = element;
    }
  }, {
    key: 'setOptionElement',
    value: function setOptionElement(name, element) {
      this.optionElements[name] = element;
    }
  }, {
    key: 'updateLine',
    value: function updateLine() {
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
      lineElement.style.left = left + 'px';
      lineElement.style.width = width + 'px';
    }
  }, {
    key: 'onChange',
    value: function onChange(value, option) {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(value, option);
      }
    }
  }, {
    key: 'renderLine',
    value: function renderLine() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        ref: function ref(element) {
          return _this2.setLineElement(element);
        },
        className: this.elementName('tabs', 'line')
      });
    }
  }, {
    key: 'renderCount',
    value: function renderCount(option) {
      if (typeof option.count !== 'string' && typeof option.count !== 'number') {
        return null;
      }
      return _react2.default.createElement(
        _Pill2.default,
        { size: _settings2.default.getSize(this.props.size || '24'), color: option.countColor },
        option.count
      );
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var _this3 = this;

      return this.props.options.map(function (option) {
        return _react2.default.createElement(
          'div',
          {
            key: option.value,
            ref: function ref(element) {
              return _this3.setOptionElement(option.value, element);
            },
            className: _this3.elementName('tabs', 'option', _this3.getOptionModifiers(option), true),
            onClick: function onClick() {
              return _this3.onChange(option.value, option);
            }
          },
          _react2.default.createElement(
            'div',
            null,
            option.title
          ),
          _this3.renderCount(option)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(element) {
            return _this4.setElement(element);
          },
          className: this.blockName('tabs', this.getModifiers())
        },
        this.renderLine(),
        this.renderOptions(),
        this.props.children
      );
    }
  }]);

  return Button;
}(_AbstractComponent3.default);

exports.default = Button;