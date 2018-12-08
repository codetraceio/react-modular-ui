import * as React from "react";

import { IModifiers, getBlockName, getElementName } from "../services/componentService";

export interface IToggleProps {
  size?: string | number;
  color?: string;
  disabled?: boolean;
  checked?: boolean;

  onChange?: (value: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}

export default class Toggle extends React.PureComponent<IToggleProps, {}> {
  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      color: this.props.color,
      checked: this.props.checked,
      disabled: this.props.disabled
    };
  }

  isChecked(): boolean {
    return this.props.checked || false;
  }

  onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof this.props.onChange === "function") {
      this.props.onChange(!this.props.checked, e);
    }
  };

  render() {
    return (
      <div
        className={getBlockName("toggle", this.getModifierObject())}
        role="checkbox"
        tabIndex={0}
        aria-checked={this.isChecked()}
        onClick={this.onClick}
      >
        <div className={getElementName("toggle", "container")}>
          <div className={getElementName("toggle", "line")} />
          <div className={getElementName("toggle", "handle")} />
        </div>
        {this.props.children ? (
          <div className={getElementName("toggle", "label")}>
            {this.props.children}
          </div>
        ) :  null}
      </div>
    );
  }
}
