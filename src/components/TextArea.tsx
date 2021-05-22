import * as React from "react";

import { Modifiers, getBlockName, getElementName } from "../services/componentService";

export interface TextAreaProps {
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

function onEvent(
  callback: (value: string, event: React.SyntheticEvent<HTMLTextAreaElement>) => void
) {
  if (typeof callback === "function") {
    return (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
      callback(event.currentTarget.value, event);
    };
  }
}

export default class TextArea extends React.PureComponent<TextAreaProps, {}> {
  getModifierObject(): Modifiers {
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

  onChange = onEvent(this.props.onChange);

  onKeyDown = onEvent(this.props.onKeyDown);

  onKeyUp = onEvent(this.props.onKeyUp);

  onKeyPress = onEvent(this.props.onKeyPress);

  onFocus = onEvent(this.props.onFocus);

  onBlur = onEvent(this.props.onBlur);

  renderLabel() {
    return this.props.label ? (
      <div className={getElementName("textarea", "label")}>{this.props.label}</div>
    ) : null;
  }

  render() {
    return (
      <div className={getBlockName("textarea", this.getModifierObject())}>
        {this.renderLabel()}
        <textarea
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          disabled={this.props.disabled}
          style={this.getStyle()}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          onKeyUp={this.onKeyUp}
          onKeyPress={this.onKeyPress}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </div>
    );
  }
}
