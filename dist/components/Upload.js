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

var Upload = function (_AbstractComponent) {
  _inherits(Upload, _AbstractComponent);

  function Upload(props) {
    _classCallCheck(this, Upload);

    var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, props));

    _this.element = null;
    _this.fileElement = null;

    _this.onDragOverListener = _this.onDragOver.bind(_this);
    _this.onDragLeaveListener = _this.onDragLeave.bind(_this);
    _this.onDropListener = _this.onDrop.bind(_this);

    _this.state = {
      active: false
    };
    return _this;
  }

  _createClass(Upload, [{
    key: 'getModifierObject',
    value: function getModifierObject() {
      return {
        active: this.state.active
      };
    }
  }, {
    key: 'updateElement',
    value: function updateElement(element) {
      if (!element) {
        return;
      }

      if (this.element !== element) {
        element.addEventListener('dragover', this.onDragOverListener, false);
        element.addEventListener('dragleave', this.onDragLeaveListener, false);
        element.addEventListener('drop', this.onDropListener, false);
      }

      this.element = element;
    }
  }, {
    key: 'updateFileElement',
    value: function updateFileElement(element) {
      this.fileElement = element;
    }
  }, {
    key: 'onDragOver',
    value: function onDragOver(event) {
      event.preventDefault();
      this.setState({
        active: true
      });
    }
  }, {
    key: 'onDragLeave',
    value: function onDragLeave() {
      this.setState({
        active: false
      });
    }
  }, {
    key: 'onDrop',
    value: function onDrop(event) {
      event.stopPropagation();
      event.preventDefault();

      var files = event.dataTransfer.files;
      var file = null;
      if (files.length > 0) {
        file = files[0];
      }
      console.log(file);

      this.setState({
        active: false
      });

      if (typeof this.props.onChange === 'function') {
        this.props.onChange(file);
      }
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      if (!this.fileElement) {
        return;
      }

      this.fileElement.click();
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      var file = this.fileElement.files[0];

      if (typeof this.props.onChange === 'function') {
        this.props.onChange(file);
      }
    }
  }, {
    key: 'renderText',
    value: function renderText() {
      if (this.props.success) {
        return this.props.successText;
      }

      return this.props.text;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          className: this.getBlockName('upload', this.getModifierObject()),
          ref: function ref(element) {
            return _this2.updateElement(element);
          },
          onClick: function onClick() {
            return _this2.onClick();
          }
        },
        _react2.default.createElement('input', {
          type: 'file',
          name: this.props.name,
          style: { display: 'none' },
          ref: function ref(element) {
            return _this2.updateFileElement(element);
          },
          onChange: function onChange() {
            return _this2.onChange();
          }
        }),
        _react2.default.createElement(
          'div',
          null,
          this.renderText()
        )
      );
    }
  }]);

  return Upload;
}(_AbstractComponent3.default);

exports.default = Upload;