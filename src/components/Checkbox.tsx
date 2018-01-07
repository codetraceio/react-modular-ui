import * as React from "react";

import settings from "../services/settingService";

import { IModifiers, getBlockName, getElementName } from "../services/componentService";

export interface ICheckboxProps {
  size?: string | number;
  view?: string;
  color?: string;
  disabled?: boolean;
  checked?: boolean;
  name?: string;

  onChange?: (checked: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}

import Icon from "./Icon";

export default class Button extends React.PureComponent<ICheckboxProps, {}> {
  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      view: this.props.view,
      color: this.props.color,
      disabled: this.props.disabled
    };
  }

  isChecked(): boolean {
    return this.props.checked || false;
  }

  onChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof this.props.onChange === "function") {
      this.props.onChange(!this.props.checked, e);
    }
  };

  render() {
    if (settings.isBackend()) {
      return (
        <div
          className={getBlockName("checkbox", this.getModifierObject())}
          role="checkbox"
          tabIndex={1}
          data-name={this.props.name}
          aria-checked={this.isChecked().toString()}
        >
          <div>
            <div
              className={getElementName("checkbox", "icon", {
                checked: true
              })}
            >
              <Icon size={this.props.size} name="checkbox-checked"/>
            </div>
            <div
              className={getElementName("checkbox", "icon", {
                notChecked: true
              })}
            >
              <Icon size={this.props.size} name="checkbox"/>
            </div>
          </div>
          <div>{this.props.children}</div>
        </div>
      );
    }

    return (
      <div
        className={getBlockName("checkbox", this.getModifierObject())}
        data-name={this.props.name}
        aria-checked={this.isChecked().toString()}
        tabIndex={1}
        onClick={this.onChange}
      >
        <div className={getElementName("checkbox", "icon")}>
          {this.props.checked ? (
            <Icon
              size={this.props.size}
              name="checkbox"
            />
          ) : null}
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
