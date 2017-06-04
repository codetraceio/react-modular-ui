'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var _AbstractComponent2 = require('./AbstractComponent');

var _AbstractComponent3 = _interopRequireDefault(_AbstractComponent2);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = function (_AbstractComponent) {
  _inherits(Tooltip, _AbstractComponent);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.state = {
      show: false
    };

    _this.wrapperElemenet = null;
    _this.tooltipElement = null;
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'updateWrapper',
    value: function updateWrapper(element) {
      this.wrapperElemenet = element;
    }
  }, {
    key: 'updateTooltip',
    value: function updateTooltip(element) {
      this.tooltipElement = element;
    }
  }, {
    key: 'onUpdateTooltip',
    value: function onUpdateTooltip() {
      var wrapperElement = this.wrapperElemenet;
      var tooltipElement = this.tooltipElement;

      if (!wrapperElement || !tooltipElement) {
        return;
      }

      _utils2.default.updateTooltip(wrapperElement, tooltipElement, this.props.prefer);
    }
  }, {
    key: 'onShowTooltip',
    value: function onShowTooltip() {
      var _this2 = this;

      this.setState({
        show: true
      }, function () {
        return _this2.onUpdateTooltip();
      });
    }
  }, {
    key: 'onHideTooltip',
    value: function onHideTooltip() {
      this.setState({
        show: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var portalKey = _settings2.default.isBackend() ? _utils2.default.generateKey() : null;

      return _react2.default.createElement(
        'div',
        {
          className: this.getBlockClassName('tooltip-wrapper'),
          onMouseOver: function onMouseOver() {
            return _this3.onShowTooltip();
          },
          onMouseOut: function onMouseOut() {
            return _this3.onHideTooltip();
          },
          ref: function ref(element) {
            return _this3.updateWrapper(element);
          },
          'data-portal-key': portalKey
        },
        this.props.children,
        _react2.default.createElement(
          _Portal2.default,
          { show: this.state.show, portal: this.props.portal, portalKey: portalKey },
          _react2.default.createElement(
            'div',
            { className: this.getBlockClassName('tooltip'), ref: function ref(element) {
                return _this3.updateTooltip(element);
              } },
            this.props.title
          )
        )
      );
    }
  }]);

  return Tooltip;
}(_AbstractComponent3.default);

exports.default = Tooltip;