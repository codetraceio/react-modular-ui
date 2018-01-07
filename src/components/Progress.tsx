import * as React from "react";
import { IModifiers, getBlockName, getElementName } from "../services/componentService";

export interface IProgressProps {
  size?: string | number;
  color?: string;
  value: string | number;
}

export default class Progress extends React.PureComponent<IProgressProps, {}> {
  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      color: this.props.color
    };
  }

  getValue() {
    if (typeof this.props.value === "string" || typeof this.props.value === "number") {
      return this.props.value.toString();
    }
    return "0";
  }

  render() {
    return (
      <div className={getBlockName("progress", this.getModifierObject())}>
        <div
          className={getElementName("progress", "line")}
          style={{width: `${this.getValue()}%`}}
        />
      </div>
    );
  }
}
