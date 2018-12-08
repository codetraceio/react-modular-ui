import * as React from "react";

import { IModifiers, getBlockName } from "../services/componentService";

export interface IPillProps {
  size?: string | number;
  color?: string;

  onChange?: (offset: number, page: number) => void;
}

export default class Pill extends React.PureComponent<IPillProps, {}> {
  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      color: this.props.color
    };
  }

  render() {
    return (
      <div
        className={getBlockName("pill", this.getModifierObject())}
      >
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
