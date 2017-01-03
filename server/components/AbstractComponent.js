'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AbstractComponent extends _react2.default.Component {
  constructor(props) {
    super(props);

    this.bindKeys(this.__proto__);
  }

  bindKeys(object) {
    Object.keys(object).forEach(key => {
      let method = this[key];

      if (typeof method === 'function') {
        this[key] = method.bind(this);
      }

      if (object instanceof AbstractComponent) {
        this.bindKeys(object.__proto__);
      }
    });
  }
}
exports.default = AbstractComponent;
module.exports = exports['default'];