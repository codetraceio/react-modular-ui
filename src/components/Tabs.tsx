import * as React from 'react';

import { IModifiers, getBlockName, getElementName } from '../services/componentService';

export interface ITabsOption {
  title: string;
  value: string | number;
  count?: number;
  countColor?: string;
}

export interface ITabsProps {
  size?: string | number;
  color?: string;
  options: ITabsOption[];
  value: string | number;

  onChange?: (value: string | number, option: ITabsOption) => void;
}

export default class Tabs extends React.Component<ITabsProps> {
  private element: HTMLElement;
  private lineElement: HTMLElement;
  private optionElements: {[key: string]: HTMLElement};

  constructor(props: ITabsProps) {
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

  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      color: this.props.color
    };
  }

  getOptionModifiers(option: ITabsOption): IModifiers {
    if (option.value === this.props.value) {
      return {
        selected: true
      };
    }
    return {};
  }

  setElement(element: HTMLElement) {
    this.element = element;
  }

  setLineElement(element: HTMLElement) {
    this.lineElement = element;
  }

  setOptionElement(name: string, element: HTMLElement) {
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

  onChange(value: string | number, option: ITabsOption) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(value, option);
    }
  }

  renderLine() {
    return (
      <div
        ref={(element) => this.setLineElement(element)}
        className={getElementName('tabs', 'line')}
      />
    );
  }

  renderCount(option: ITabsOption) {
    if (typeof option.count !== 'string' && typeof option.count !== 'number') {
      return null;
    }
    return (
      <div
        className={getElementName('tabs', 'count', {
          countColor: option.countColor
        })}
      >
        {option.count}
      </div>
    );
  }

  renderOptions() {
    return this.props.options.map((option) => {
      return (
        <div
          key={option.value}
          ref={(element) => this.setOptionElement(option.value.toString(), element)}
          className={getElementName('tabs', 'option', this.getOptionModifiers(option), true)}
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
        className={getBlockName('tabs', this.getModifierObject())}
      >
        {this.renderLine()}
        {this.renderOptions()}
        {this.props.children}
      </div>
    );
  }
}
