'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractComponent = require('./AbstractComponent');

var _AbstractComponent2 = _interopRequireDefault(_AbstractComponent);

var _Pill = require('./Pill');

var _Pill2 = _interopRequireDefault(_Pill);

var _settings = require('../settings');

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Button extends _AbstractComponent2.default {
  constructor(props) {
    super(props);

    this.element = null;
    this.lineElement = null;
    this.optionElements = {};
  }

  componentDidMount() {
    this.updateLine();
  }
  componentDidUpdate() {
    this.updateLine();
  }

  getModifiers() {
    return ['size', 'color'];
  }

  getOptionModifiers(option) {
    if (option.value === this.props.value) {
      return ['selected'];
    }
    return [];
  }

  setElement(element) {
    this.element = element;
  }

  setLineElement(element) {
    this.lineElement = element;
  }

  setOptionElement(name, element) {
    this.optionElements[name] = element;
  }

  updateLine() {
    const element = this.element;
    const lineElement = this.lineElement;
    const optionElement = this.optionElements[this.props.value];
    if (!element || !lineElement || !optionElement) {
      return;
    }
    const elementRect = element.getBoundingClientRect();
    const optionRect = optionElement.getBoundingClientRect();
    const left = optionRect.left - elementRect.left;
    const width = optionRect.right - optionRect.left;
    lineElement.style.left = `${ left }px`;
    lineElement.style.width = `${ width }px`;
  }

  onChange(value, option) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(value, option);
    }
  }

  renderLine() {
    return _react2.default.createElement('div', {
      ref: element => this.setLineElement(element),
      className: this.elementName('tabs', 'line')
    });
  }

  renderCount(option) {
    if (typeof option.count !== 'string' && typeof option.count !== 'number') {
      return null;
    }
    return _react2.default.createElement(
      _Pill2.default,
      { size: _settings2.default.getSize(this.props.size || '24'), color: option.countColor },
      option.count
    );
  }

  renderOptions() {
    return this.props.options.map(option => {
      return _react2.default.createElement(
        'div',
        {
          key: option.value,
          ref: element => this.setOptionElement(option.value, element),
          className: this.elementName('tabs', 'option', this.getOptionModifiers(option), true),
          onClick: () => this.onChange(option.value, option)
        },
        _react2.default.createElement(
          'div',
          null,
          option.title
        ),
        this.renderCount(option)
      );
    });
  }

  render() {
    return _react2.default.createElement(
      'div',
      {
        ref: element => this.setElement(element),
        className: this.blockName('tabs', this.getModifiers())
      },
      this.renderLine(),
      this.renderOptions(),
      this.props.children
    );
  }
}
exports.default = Button;
module.exports = exports['default'];