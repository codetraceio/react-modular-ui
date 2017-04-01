'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent = require('./AbstractComponent');

var _AbstractComponent2 = _interopRequireDefault(_AbstractComponent);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Button extends _AbstractComponent2.default {
  getModifiers() {
    return ['size', 'view', 'color', 'disabled'];
  }

  onChange(e) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(!this.props.checked, e);
    }
  }

  render() {
    return _react2.default.createElement(
      'div',
      {
        className: this.blockName('checkbox', this.getModifiers()),
        'data-name': this.props.name,
        tabIndex: '1',
        onClick: e => this.onChange(e)
      },
      _react2.default.createElement(_Icon2.default, { size: this.props.size, name: this.props.checked ? 'checkbox-checked' : 'checkbox' }),
      _react2.default.createElement(
        'div',
        null,
        this.props.children
      )
    );
  }
}
exports.default = Button;
module.exports = exports['default'];