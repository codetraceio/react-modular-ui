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

var Toggle = function (_AbstractComponent) {
  _inherits(Toggle, _AbstractComponent);

  function Toggle() {
    _classCallCheck(this, Toggle);

    return _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
  }

  _createClass(Toggle, [{
    key: 'getModifierObject',
    value: function getModifierObject() {
      return {
        size: this.props.size,
        color: this.props.color,
        checked: this.props.checked,
        disabled: this.props.disabled
      };
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      this.props.onChange(!this.props.checked, e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          className: this.getBlockName('toggle', this.getModifierObject()),
          role: 'checkbox',
          tabIndex: '0',
          'aria-checked': this.props.checked.toString(),
          onClick: function onClick(e) {
            return _this2.onClick(e);
          }
        },
        _react2.default.createElement(
          'div',
          { className: this.getElementName('toggle', 'container') },
          _react2.default.createElement('div', { className: this.getElementName('toggle', 'line') }),
          _react2.default.createElement('div', { className: this.getElementName('toggle', 'handle') })
        ),
        this.props.children ? _react2.default.createElement(
          'div',
          { className: this.getElementName('toggle', 'label') },
          this.props.children
        ) : null
      );
    }
  }]);

  return Toggle;
}(_AbstractComponent3.default);

exports.default = Toggle;