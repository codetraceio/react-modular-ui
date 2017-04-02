import React from 'react';

import settings from '../settings';

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
    if (settings.isBackend()) {
      return (
        <div
          className={this.blockName('checkbox', this.getModifiers())}
          role="checkbox"
          tabIndex="1"
          data-name={this.props.name}
          aria-checked={this.props.checked.toString()}
        >
          <div>
            <Icon size={this.props.size} name='checkbox-checked' />
            <Icon size={this.props.size} name='checkbox' />
          </div>
          <div>{this.props.children}</div>
        </div>
      );
    }

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
