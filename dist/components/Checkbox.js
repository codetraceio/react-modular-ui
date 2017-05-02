'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

var _AbstractComponent2 = require('./AbstractComponent');

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_AbstractComponent) {
  _inherits(Button, _AbstractComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
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
    key: 'onChange',
    value: function onChange(e) {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(!this.props.checked, e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (_settings2.default.isBackend()) {
        return _react2.default.createElement(
          'div',
          {
            className: this.getBlockName('checkbox', this.getModifierObject()),
            role: 'checkbox',
            tabIndex: '1',
            'data-name': this.props.name,
            'aria-checked': this.props.checked.toString()
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              {
                className: this.getElementName('checkbox', 'icon', {
                  checked: true
                })
              },
              _react2.default.createElement(_Icon2.default, { size: this.props.size, name: 'checkbox-checked' })
            ),
            _react2.default.createElement(
              'div',
              {
                className: this.getElementName('checkbox', 'icon', {
                  notChecked: true
                })
              },
              _react2.default.createElement(_Icon2.default, { size: this.props.size, name: 'checkbox' })
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            this.props.children
          )
        );
      }

      return _react2.default.createElement(
        'div',
        {
          className: this.getBlockName('checkbox', this.getModifierObject()),
          'data-name': this.props.name,
          tabIndex: '1',
          onClick: function onClick(e) {
            return _this2.onChange(e);
          }
        },
        _react2.default.createElement(
          'div',
          { className: this.getElementName('checkbox', 'icon') },
          this.props.checked ? _react2.default.createElement(_Icon2.default, {
            size: this.props.size,
            name: 'checkbox'
          }) : null
        ),
        _react2.default.createElement(
          'div',
          null,
          this.props.children
        )
      );
    }
  }]);

  return Button;
}(_AbstractComponent3.default);

exports.default = Button;