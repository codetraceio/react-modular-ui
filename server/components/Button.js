'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractUiComponent = require('./AbstractUiComponent');

var _AbstractUiComponent2 = _interopRequireDefault(_AbstractUiComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Button extends _AbstractUiComponent2.default {
  getModifiers() {
    return ['size', 'view', 'color', 'disabled'];
  }

  render() {
    return _react2.default.createElement(
      'div',
      {
        className: this.blockName('button', this.getModifiers()),
        onClick: this.props.onClick
      },
      this.props.children
    );
  }
}
exports.default = Button;
module.exports = exports['default'];