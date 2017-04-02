'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent = require('./AbstractComponent');

var _AbstractComponent2 = _interopRequireDefault(_AbstractComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Input extends _AbstractComponent2.default {
  getModifiers() {
    return ['size', 'view', 'color', 'disabled'];
  }

  delegateEvent(eventName) {
    return event => {
      if (typeof this.props[eventName] === 'function') {
        this.props[eventName](event.target.value, event);
      }
    };
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
}
exports.default = Input;
module.exports = exports['default'];