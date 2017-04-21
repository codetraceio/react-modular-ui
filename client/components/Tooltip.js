'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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

      var rect = wrapperElement.getBoundingClientRect();
      var wrapperWidth = wrapperElement.offsetWidth;
      var wrapperHeight = wrapperElement.offsetHeight;
      var width = tooltipElement.offsetWidth;
      var height = tooltipElement.offsetHeight;
      var left = 0;
      var top = 0;
      var tailSize = 8;
      console.log(rect.left + width + tailSize, window.outerWidth);
      var fitsRight = rect.left + width + tailSize < window.outerWidth;
      var fitsRightHalf = rect.left + width / 2 + tailSize < window.outerWidth;
      var fitsBottom = rect.bottom + height + tailSize < window.outerHeight;
      var fitsLeft = rect.left - width - tailSize > 0;
      var fitsLeftHalf = rect.left - width - tailSize / 2 > 0;
      var fitsTop = rect.top - height - tailSize > 0;
      var position = void 0;

      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

      tooltipElement.classList.remove('-tail-top');
      tooltipElement.classList.remove('-tail-right');
      tooltipElement.classList.remove('-tail-bottom');
      tooltipElement.classList.remove('-tail-left');

      if (this.props.prefer === 'left' && fitsLeft) {
        position = 'left';
      } else if (this.props.prefer === 'right' && fitsRight) {
        position = 'right';
      } else if (this.props.prefer === 'top' && fitsRightHalf && fitsLeftHalf && fitsTop) {
        position = 'top';
      } else if (fitsRightHalf && fitsLeftHalf && (fitsTop || fitsBottom)) {
        position = fitsBottom ? 'bottom' : 'top';
      } else {
        position = fitsRight ? 'right' : 'left';
      }

      if (position === 'top' || position === 'bottom') {
        left = rect.left - width / 2 + wrapperWidth / 2;
        if (position === 'top') {
          top = rect.top - height - tailSize;
          tooltipElement.classList.add('-tail-bottom');
        } else {
          top = rect.top + wrapperHeight + tailSize;
          tooltipElement.classList.add('-tail-top');
        }
      } else {
        top = rect.top - height / 2 + wrapperHeight / 2;
        if (position === 'left') {
          left = rect.left - width - tailSize;
          tooltipElement.classList.add('-tail-right');
        } else {
          left = rect.left + wrapperWidth + tailSize;
          tooltipElement.classList.add('-tail-left');
        }
      }

      tooltipElement.style.left = scrollLeft + left + 'px';
      tooltipElement.style.top = scrollTop + top + 'px';
      console.log(tooltipElement);
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

      return _react2.default.createElement(
        'div',
        {
          onMouseOver: function onMouseOver() {
            return _this3.onShowTooltip();
          },
          onMouseOut: function onMouseOut() {
            return _this3.onHideTooltip();
          },
          ref: function ref(element) {
            return _this3.updateWrapper(element);
          }
        },
        this.props.children,
        _react2.default.createElement(
          _Portal2.default,
          { show: this.state.show },
          _react2.default.createElement(
            'div',
            { className: this.blockClassName('tooltip'), ref: function ref(element) {
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