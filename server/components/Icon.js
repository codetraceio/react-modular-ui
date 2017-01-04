'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractUiComponent = require('./AbstractUiComponent');

var _AbstractUiComponent2 = _interopRequireDefault(_AbstractUiComponent);

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Button extends _AbstractUiComponent2.default {
  getModifiers() {
    return ['size', 'color'];
  }

  render() {
    return _react2.default.createElement(
      'div',
      {
        className: this.blockName('icon', this.getModifiers()),
        onClick: this.props.onClick
      },
      _settings2.default.getIcon(this.props.name)
    );
  }
}
exports.default = Button;
module.exports = exports['default'];