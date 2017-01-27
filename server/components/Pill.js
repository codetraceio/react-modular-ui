'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent = require('./AbstractComponent');

var _AbstractComponent2 = _interopRequireDefault(_AbstractComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Pill extends _AbstractComponent2.default {
  getModifiers() {
    return ['size', 'color'];
  }

  render() {
    return _react2.default.createElement(
      'div',
      {
        className: this.blockName('pill', this.getModifiers())
      },
      _react2.default.createElement(
        'div',
        null,
        this.props.children
      )
    );
  }
}
exports.default = Pill;
module.exports = exports['default'];