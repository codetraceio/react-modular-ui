import * as React from 'react';

import {
  default as AbstractComponent,
  IModifiers
} from './AbstractComponent';

export interface IInputProps {
  size?: string | number;
  view?: string;
  color?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  shape?: string;

  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (value: string, event: React.FocusEvent<HTMLInputElement>) => void;
  onSubmit?: (value: string, event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (value: string, event: React.MouseEvent<HTMLInputElement>) => void;
}

export default class Input extends AbstractComponent<IInputProps, {}> {
  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      view: this.props.view,
      color: this.props.color,
      disabled: this.props.disabled,
      shape: this.props.shape,
    };
  }

  onEvent(
    event: React.SyntheticEvent<HTMLInputElement>,
    callback: (value: string, event: React.SyntheticEvent<HTMLInputElement>) => void
  ) {
    if (typeof callback === 'function') {
      callback(event.currentTarget.value, event);
    }
  }

  onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (typeof this.props.onKeyDown === 'function') {
      this.props.onKeyDown(event.currentTarget.value, event);
    }
    if (event.isPropagationStopped()) {
      return;
    }
    if (
      typeof this.props.onSubmit === 'function' &&
      ['Enter', 'NumpadEnter'].indexOf(event.key) !== -1 && !event.shiftKey
    ) {
      this.props.onSubmit(event.currentTarget.value, event);
    }
  }

  renderLabel() {
    return this.props.label ? (
      <div className={this.getElementName('input', 'label')}>{this.props.label}</div>
    ) : null;
  }

  render() {
    return (
      <div className={this.getBlockName('input', this.getModifierObject())}>
        {this.renderLabel()}
        <input
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          disabled={this.props.disabled}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.onEvent(event, this.props.onChange)}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => this.onKeyDown(event)}
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => this.onEvent(event, this.props.onKeyUp)}
          onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => this.onEvent(event, this.props.onKeyPress)}
          onFocus={(event: React.FocusEvent<HTMLInputElement>) => this.onEvent(event, this.props.onFocus)}
          onBlur={(event: React.FocusEvent<HTMLInputElement>) => this.onEvent(event, this.props.onBlur)}
          onClick={(event: React.MouseEvent<HTMLInputElement>) => this.onEvent(event, this.props.onClick)}
        />
      </div>
    )
  }
}
