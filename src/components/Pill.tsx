import * as React from "react";

import { IModifiers, getBlockName } from "../services/componentService";

export interface IPillProps {
  size?: string | number;
  color?: string;
  paddingLeft?: string | number;
  paddingRight?: string | number;

  onClick?: () => void;
}

export default class Pill extends React.PureComponent<IPillProps, {}> {
  getModifierObject(): IModifiers {
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
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
