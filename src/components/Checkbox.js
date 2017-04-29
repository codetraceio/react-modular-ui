import React from 'react';

import settings from '../settings';

import AbstractComponent from './AbstractComponent';
import Icon from './Icon';

export default class Button extends AbstractComponent {
  getModifierObject() {
    return {
      size: this.props.size,
      view: this.props.view,
      color: this.props.color,
      disabled: this.props.disabled
    };
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
          className={this.getBlockName('checkbox', this.getModifierObject())}
          role="checkbox"
          tabIndex="1"
          data-name={this.props.name}
          aria-checked={this.props.checked.toString()}
        >
          <div>
            <div
              className={this.getElementName('checkbox', 'icon', {
                checked: true
              })}
            >
              <Icon size={this.props.size} name='checkbox-checked' />
            </div>
            <div
              className={this.getElementName('checkbox', 'icon', {
                notChecked: true
              })}
            >
              <Icon size={this.props.size} name='checkbox' />
            </div>
          </div>
          <div>{this.props.children}</div>
        </div>
      );
    }

    return (
      <div
        className={this.getBlockName('checkbox', this.getModifierObject())}
        data-name={this.props.name}
        tabIndex="1"
        onClick={(e) => this.onChange(e)}
      >
        <Icon
          size={this.props.size}
          name={this.props.checked ? 'checkbox-checked' : 'checkbox'}
        />
        <div>{this.props.children}</div>
      </div>
    )
  }
}
