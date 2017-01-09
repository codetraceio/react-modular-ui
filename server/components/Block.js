'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent = require('./AbstractComponent');

var _AbstractComponent2 = _interopRequireDefault(_AbstractComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Block extends _AbstractComponent2.default {
  getModifiers() {
    return ['layout', 'wrap', 'padding', 'margin', 'hide', 'fit', 'grow', 'shrink', 'order', 'grid', 'align', 'justify', 'center', 'scroll', 'spaceHorizontal', 'spaceVertical'];
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