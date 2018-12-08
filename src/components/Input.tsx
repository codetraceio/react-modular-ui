import * as React from "react";

import { IModifiers, getBlockName, getElementName} from "../services/componentService";

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

function onEvent<T>(
  callback: (value: string, event: T) => void
) {
  if (typeof callback === "function") {
    return (event: T) => {
      callback((event as any).currentTarget.value, event);
    }
  }
}

export default class Input extends React.PureComponent<IInputProps, {}> {
  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      view: this.props.view,
      color: this.props.color,
      disabled: this.props.disabled,
      shape: this.props.shape,
    };
  }

  onKeyDownEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (typeof this.props.onKeyDown === "function") {
      this.props.onKeyDown(event.currentTarget.value, event);
    }
    if (event.isPropagationStopped()) {
      return;
    }
    if (
      typeof this.props.onSubmit === "function" &&
      ["Enter", "NumpadEnter"].indexOf(event.key) !== -1 && !event.shiftKey
    ) {
      this.props.onSubmit(event.currentTarget.value, event);
    }
  };

  onChange = onEvent<React.ChangeEvent<HTMLInputElement>>(this.props.onChange);

  onKeyUp = onEvent<React.KeyboardEvent<HTMLInputElement>>(this.props.onKeyUp);

  onKeyDown = onEvent<React.KeyboardEvent<HTMLInputElement>>(this.props.onKeyDown);

  onFocus = onEvent<React.FocusEvent<HTMLInputElement>>(this.props.onFocus);

  onBlur = onEvent<React.FocusEvent<HTMLInputElement>>(this.props.onBlur);

  onClick = onEvent<React.MouseEvent<HTMLInputElement>>(this.props.onClick);

  renderLabel() {
    return this.props.label ? (
      <div className={getElementName("input", "label")}>{this.props.label}</div>
    ) : null;
  }

  render() {
    return (
      <div className={getBlockName("input", this.getModifierObject())}>
        {this.renderLabel()}
        <input
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          disabled={this.props.disabled}
          onChange={this.onChange}
          onKeyDown={this.onKeyDownEvent}
          onKeyUp={this.onKeyUp}
          onKeyPress={this.onKeyDown}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onClick={this.onClick}
        />
      </div>
    );
  }
}
