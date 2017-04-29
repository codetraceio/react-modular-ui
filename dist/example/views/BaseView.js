"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseView = function (_React$Component) {
  _inherits(BaseView, _React$Component);

  function BaseView() {
    _classCallCheck(this, BaseView);

    return _possibleConstructorReturn(this, (BaseView.__proto__ || Object.getPrototypeOf(BaseView)).apply(this, arguments));
  }

  _createClass(BaseView, [{
    key: "renderStyle",
    value: function renderStyle() {
      return this.props.styles ? _react2.default.createElement("link", { rel: "stylesheet", href: this.props.styles }) : null;
    }
  }, {
    key: "renderScript",
    value: function renderScript() {
      return this.props.scripts ? _react2.default.createElement("script", { src: this.props.scripts }) : null;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "html",
        { lang: "en-US" },
        _react2.default.createElement(
          "head",
          null,
          _react2.default.createElement("meta", { charSet: "UTF-8" }),
          _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" }),
          _react2.default.createElement(
            "title",
            null,
            this.props.title
          ),
          _react2.default.createElement("base", { href: "/" }),
          _react2.default.createElement("meta", { name: "title", content: this.props.title }),
          this.renderStyle()
        ),
        _react2.default.createElement(
          "body",
          null,
          this.props.children,
          this.renderScript()
        )
      );
    }
  }]);

  return BaseView;
}(_react2.default.Component);

exports.default = BaseView;