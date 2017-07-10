import * as React from 'react';

import {
  default as AbstractComponent,
  IModifiers
} from './AbstractComponent';

export interface IPillProps {
  size?: string | number;
  color?: string;

  onChange?: (offset: number, page: number) => void;
}

export default class Pill extends AbstractComponent<IPillProps, {}> {
  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      color: this.props.color
    };
  }

  render() {
    return (
      <div
        className={this.getBlockName('pill', this.getModifierObject())}
      >
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
