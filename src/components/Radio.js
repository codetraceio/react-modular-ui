import React from 'react';

import settings from '../settings';

import AbstractComponent from './AbstractComponent';
import Icon from './Icon';

export default class Radio extends AbstractComponent {
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
      this.props.onChange(this.props.value, e);
    }
  }
  render() {
    if (settings.isBackend()) {
      return (
        <div
          className={this.getBlockName('radio', this.getModifierObject())}
          role="radio"
          tabIndex="1"
          data-name={this.props.name}
          aria-checked={this.props.checked.toString()}
        >
          <div>
            <div
              className={this.getElementName('radio', 'icon', {
                checked: true
              })}
            >
              <Icon size={this.props.size} name='radio-selected' />
            </div>
            <div
              className={this.getElementName('radio', 'icon', {
                notChecked: true
              })}
            >
              <Icon size={this.props.size} name='radio' />
            </div>
          </div>
          <div>{this.props.children}</div>
        </div>
      );
    }

    return (
      <div
        className={this.getBlockName('radio', this.getModifierObject())}
        data-name={this.props.name}
        tabIndex="1"
        onClick={(e) => this.onChange(e)}
      >
        <div className={this.getElementName('radio', 'icon')}>
          {this.props.checked ? (
            <Icon
              size={this.props.size}
              name="radio"
            />
          ) : null}
        </div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}