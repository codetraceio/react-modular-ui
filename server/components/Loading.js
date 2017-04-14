'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent = require('./AbstractComponent');

var _AbstractComponent2 = _interopRequireDefault(_AbstractComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Loading extends _AbstractComponent2.default {
  getModifiers() {
    return ['size', 'color'];
  }

  render() {
    return _react2.default.createElement(
      'div',
      {
        className: this.blockName('loading', this.getModifiers())
      },
      _react2.default.createElement(
        'svg',
        { viewBox: '0 0 100 100', preserveAspectRatio: 'xMidYMid' },
        _react2.default.createElement(
          'circle',
          { cx: '50', cy: '50', r: '40', stroke: 'none', fill: 'none', strokeWidth: '10' },
          _react2.default.createElement('animate', { attributeName: 'stroke-dashoffset', dur: '2s', repeatCount: 'indefinite', from: '0', to: '-502' }),
          _react2.default.createElement('animate', { attributeName: 'stroke-dasharray', dur: '2s', repeatCount: 'indefinite', values: '150.6 100.4;1 250;150.6 100.4' })
        )
      )
    );
  }
}
exports.default = Loading;
module.exports = exports['default'];