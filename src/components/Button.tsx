import * as React from "react";

import { Modifiers, getBlockName } from "../services/componentService";

export interface ButtonProps {
  size?: string | number;
  view?: string;
  color?: string;
  shape?: string;
  disabled?: boolean;
  padding?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  name?: string;

  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default class Button extends React.PureComponent<ButtonProps, {}> {
  getModifierObject(): Modifiers {
    return {
      size: this.props.size,
      view: this.props.view,
      color: this.props.color,
      shape: this.props.shape,
      disabled: this.props.disabled,
      padding: this.props.padding,
      paddingLeft: this.props.paddingLeft,
      paddingRight: this.props.paddingRight
    };
  }

  render() {
    return (
      <div
        className={getBlockName("button", this.getModifierObject())}
        data-name={this.props.name}
        tabIndex={1}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}
