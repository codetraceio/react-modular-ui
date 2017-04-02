'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent = require('./AbstractComponent');

var _AbstractComponent2 = _interopRequireDefault(_AbstractComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Form extends _AbstractComponent2.default {
  onChange(e) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e.target.name, e.target.value, e);
    }
  }

  render() {
    return _react2.default.createElement(
      'form',
      {
        className: this.blockName('form', []),
        action: this.props.action,
        method: this.props.method,
        name: this.props.name,
        target: this.props.target,
        onChange: this.onChange,
        onSubmit: this.props.onSubmit
      },
      _react2.default.createElement('input', { type: 'submit', style: { display: 'none' } }),
      this.props.children
    );
  }
}
exports.default = Form;
module.exports = exports['default'];