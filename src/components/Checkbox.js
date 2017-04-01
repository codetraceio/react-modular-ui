import React from 'react';
import AbstractComponent from './AbstractComponent';
import Icon from './Icon';

export default class Button extends AbstractComponent {
  getModifiers() {
    return ['size', 'view', 'color', 'disabled'];
  }

  onChange(e) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(!this.props.checked, e);
    }
  }

  render() {
    return (
      <div
        className={this.blockName('checkbox', this.getModifiers())}
        data-name={this.props.name}
        tabIndex="1"
        onClick={(e) => this.onChange(e)}
      >
        <Icon size={this.props.size} name={this.props.checked ? 'checkbox-checked' : 'checkbox'} />
        <div>{this.props.children}</div>
      </div>
    )
  }
}
