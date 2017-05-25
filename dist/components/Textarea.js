'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent2 = require('./AbstractComponent');

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = function (_AbstractComponent) {
  _inherits(Textarea, _AbstractComponent);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
  }

  _createClass(Textarea, [{
    key: 'getModifierObject',
    value: function getModifierObject() {
      return {
        size: this.props.size,
        view: this.props.view,
        color: this.props.color,
        disabled: this.props.disabled
      };
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      var style = {};
      if (this.props.height) {
        style.height = this.props.height + 'px';
      }
      return style;
    }
  }, {
    key: 'delegateEvent',
    value: function delegateEvent(eventName) {
      var _this2 = this;

      return function (event) {
        if (typeof _this2.props[eventName] === 'function') {
          _this2.props[eventName](event.target.value, event);
        }
      };
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      return this.props.label ? _react2.default.createElement(
        'div',
        { className: this.getElementName('textarea', 'label') },
        this.props.label
      ) : null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.getBlockName('textarea', this.getModifierObject()), style: this.getStyle() },
        this.renderLabel(),
        _react2.default.createElement('textarea', {
          name: this.props.name,
          placeholder: this.props.placeholder,
          value: this.props.value,
          disabled: this.props.disabled,
          onChange: this.delegateEvent('onChange'),
          onKeyDown: this.delegateEvent('onKeyDown'),
          onKeyUp: this.delegateEvent('onKeyUp'),
          onKeyPress: this.delegateEvent('onKeyPress'),
          onFocus: this.delegateEvent('onFocus'),
          onBlur: this.delegateEvent('onBlur')
        })
      );
    }
  }]);

  return Textarea;
}(_AbstractComponent3.default);

exports.default = Textarea;