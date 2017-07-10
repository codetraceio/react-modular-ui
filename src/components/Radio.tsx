import * as React from 'react';

import settings from '../settings';

import {
  default as AbstractComponent,
  IModifiers
} from './AbstractComponent';
import Icon from './Icon';

export interface IRadioProps {
  size?: string | number;
  view?: string;
  color?: string;
  disabled?: boolean;

  name?: string;
  value?: string | number | boolean;
  checked?: boolean;
  placeholder?: string;
  onChange?: (value: string | number | boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}

export default class Radio extends AbstractComponent<IRadioProps, {}> {
  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      view: this.props.view,
      color: this.props.color,
      disabled: this.props.disabled
    };
  }

  onChange(e: React.MouseEvent<HTMLDivElement>) {
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
          tabIndex={1}
          data-name={this.props.name}
          aria-checked={this.props.checked.toString()}
        >
          <div>
            <div
              className={this.getElementName('radio', 'icon', {
                notChecked: true
              })}
            >
              
            </div>
            <div
              className={this.getElementName('radio', 'icon', {
                checked: true
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
        tabIndex={1}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => this.onChange(e)}
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