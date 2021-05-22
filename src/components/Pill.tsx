import * as React from "react";

import { Modifiers, getBlockName } from "../services/componentService";

export interface PillProps {
  size?: string | number;
  color?: string;
  paddingLeft?: string | number;
  paddingRight?: string | number;

  onClick?: () => void;
}

export default class Pill extends React.PureComponent<PillProps, {}> {
  getModifierObject(): Modifiers {
    return {
      size: this.props.size,
      color: this.props.color,
      paddingLeft: this.props.paddingLeft,
      paddingRight: this.props.paddingRight,
    };
  }

  render() {
    return (
      <div
        className={getBlockName("pill", this.getModifierObject())}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}
