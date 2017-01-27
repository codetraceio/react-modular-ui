import React from 'react';
import AbstractComponent from './AbstractComponent';
import Pill from './Pill';

import settings from '../settings';

export default class Button extends AbstractComponent {
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
    lineElement.style.left = `${left}px`;
    lineElement.style.width = `${width}px`;

  }

  onChange(value, option) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(value, option);
    }
  }

  renderLine() {
    return (
      <div
        ref={(element) => this.setLineElement(element)}
        className={this.elementName('tabs', 'line')}
      ></div>
    );
  }

  renderCount(option) {
    if (typeof option.count !== 'string' && typeof option.count !== 'number') {
      return null;
    }
    return (
      <Pill size={settings.getSize(this.props.size || '24')} color={option.countColor}>{option.count}</Pill>
    );
  }

  renderOptions() {
    return this.props.options.map((option) => {
      return (
        <div
          key={option.value}
          ref={(element) => this.setOptionElement(option.value, element)}
          className={this.elementName('tabs', 'option', this.getOptionModifiers(option))}
          onClick={() => this.onChange(option.value, option)}
        >
          <div>{option.title}</div>
          {this.renderCount(option)}
        </div>
      );
    });
  }

  render() {
    return (
      <div
        ref={(element) => this.setElement(element)}
        className={this.blockName('tabs', this.getModifiers())}
      >
        {this.renderLine()}
        {this.renderOptions()}
        {this.props.children}
      </div>
    );
  }
}
