import * as React from 'react';

import {
  default as AbstractComponent,
  IModifiers
} from './AbstractComponent';

export interface ITextAreaProps {
  size?: string | number;
  view?: string;
  color?: string;
  disabled?: boolean;
  height?: string | number;
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;

  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: (value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyPress?: (value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onFocus?: (value: string, event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (value: string, event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export default class TextArea extends AbstractComponent<ITextAreaProps, {}> {
  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      view: this.props.view,
      color: this.props.color,
      disabled: this.props.disabled
    };
  }

  getStyle() {
    const style: React.CSSProperties = {};
    if (this.props.height) {
      style.height = `${this.props.height.toString()}px`;
    }
    return style;
  }

  onEvent(
    event: React.SyntheticEvent<HTMLTextAreaElement>,
    callback: (value: string, event: React.SyntheticEvent<HTMLTextAreaElement>) => void
  ) {
    if (typeof callback === 'function') {
      callback(event.currentTarget.value, event);
    }
  }

  renderLabel() {
    return this.props.label ? (
      <div className={this.getElementName('textarea', 'label')}>{this.props.label}</div>
    ) : null;
  }

  render() {
    return (
      <div className={this.getBlockName('textarea', this.getModifierObject())}>
        {this.renderLabel()}
        <textarea
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          disabled={this.props.disabled}
          style={this.getStyle()}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => this.onEvent(event, this.props.onChange)}
          onKeyDown={(event: React.KeyboardEvent<HTMLTextAreaElement>) => this.onEvent(event, this.props.onKeyDown)}
          onKeyUp={(event: React.KeyboardEvent<HTMLTextAreaElement>) => this.onEvent(event, this.props.onKeyUp)}
          onKeyPress={(event: React.KeyboardEvent<HTMLTextAreaElement>) => this.onEvent(event, this.props.onKeyPress)}
          onFocus={(event: React.FocusEvent<HTMLTextAreaElement>) => this.onEvent(event, this.props.onFocus)}
          onBlur={(event: React.FocusEvent<HTMLTextAreaElement>) => this.onEvent(event, this.props.onBlur)}
        />
      </div>
    )
  }
}
