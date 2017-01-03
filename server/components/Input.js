'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractUiComponent = require('./AbstractUiComponent');

var _AbstractUiComponent2 = _interopRequireDefault(_AbstractUiComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Input extends _AbstractUiComponent2.default {
  getModifiers() {
    return ['size', 'view', 'color', 'disabled'];
  }

  renderLabel() {
    return this.props.label ? _react2.default.createElement(
      'div',
      { className: this.elementName('input', 'label') },
      this.props.label
    ) : null;
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: this.blockName('input', this.getModifiers()) },
      this.renderLabel(),
      _react2.default.createElement('input', {
        placeholder: this.props.placeholder,
        value: this.props.value,
        disabled: this.props.disabled,
        onChange: this.props.onChange,
        onKeyDown: this.props.onKeyDown,
        onKeyUp: this.props.onKeyUp,
        onKeyPress: this.props.onKeyPress,
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur
      })
    );
  }
}
exports.default = Input;
module.exports = exports['default'];