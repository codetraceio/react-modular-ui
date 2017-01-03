'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractUiComponent = require('./AbstractUiComponent');

var _AbstractUiComponent2 = _interopRequireDefault(_AbstractUiComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Block extends _AbstractUiComponent2.default {
  getModifiers() {
    return ['layout', 'wrap', 'padding', 'margin', 'hide', 'grow', 'shrink', 'order', 'grid', 'align', 'justify', 'center', 'scroll', 'spaceHorizontal', 'spaceVertical'];
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: this.blockName('block', this.getModifiers()) },
      this.props.children
    );
  }
}
exports.default = Block;
module.exports = exports['default'];