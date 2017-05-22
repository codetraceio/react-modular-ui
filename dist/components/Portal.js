'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

var _AbstractComponent2 = require('./AbstractComponent');

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal = function (_AbstractComponent) {
  _inherits(Portal, _AbstractComponent);

  function Portal(props) {
    _classCallCheck(this, Portal);

    var _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props));

    _this.portalElement = null;
    return _this;
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updatePortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removePortalElement();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updatePortal();
    }
  }, {
    key: 'addPortalElement',
    value: function addPortalElement() {
      if (!this.portalElement) {
        this.portalElement = document.createElement('div');
        window.document.body.appendChild(this.portalElement);
      }
    }
  }, {
    key: 'updatePortal',
    value: function updatePortal() {
      if (this.props.show) {
        this.addPortalElement();
        _reactDom2.default.render(_react2.default.createElement(
          'div',
          null,
          this.props.children
        ), this.portalElement);
      } else {
        this.removePortalElement();
      }
    }
  }, {
    key: 'removePortalElement',
    value: function removePortalElement() {
      if (this.portalElement) {
        window.document.body.removeChild(this.portalElement);
        this.portalElement = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (_settings2.default.isBackend() && Array.isArray(this.props.portal) && this.props.portalKey) {
        this.props.portal.push(_react2.default.createElement(
          'div',
          { key: this.props.portalKey, 'data-portal': this.props.portalKey, style: { display: 'none' } },
          this.props.children
        ));
      }

      return null;
    }
  }]);

  return Portal;
}(_AbstractComponent3.default);

exports.default = Portal;