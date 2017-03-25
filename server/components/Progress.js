'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent = require('./AbstractComponent');

var _AbstractComponent2 = _interopRequireDefault(_AbstractComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Progress extends _AbstractComponent2.default {
  getModifiers() {
    return ['color'];
  }

  render() {
    return _react2.default.createElement(
      'div',
      { className: this.blockName('progress', this.getModifiers()) },
      _react2.default.createElement('div', { className: this.elementName('progress', 'line'), style: { width: `${ this.props.value }%` } })
    );
  }
}
exports.default = Progress;
module.exports = exports['default'];