'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent2 = require('./AbstractComponent');

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loading = function (_AbstractComponent) {
  _inherits(Loading, _AbstractComponent);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
  }

  _createClass(Loading, [{
    key: 'getModifiers',
    value: function getModifiers() {
      return ['size', 'color'];
    }
  }, {
    key: 'render',
    value: function render() {
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
  }]);

  return Loading;
}(_AbstractComponent3.default);

exports.default = Loading;
module.exports = exports['default'];