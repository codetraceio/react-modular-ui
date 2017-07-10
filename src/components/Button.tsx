import * as React from 'react';

import {
  default as AbstractComponent,
  IModifiers
} from './AbstractComponent';

export interface IButtonProps {
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

export default class Button extends AbstractComponent<IButtonProps, {}> {
  getModifierObject(): IModifiers {
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
        className={this.getBlockName('button', this.getModifierObject())}
        data-name={this.props.name}
        tabIndex={1}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    )
  }
}
