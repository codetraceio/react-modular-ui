import * as React from 'react';

import {
  default as AbstractComponent,
  IModifiers
} from './AbstractComponent';
import settings from '../services/settingService';

export interface IIconProps {
  size?: string | number;
  width?: string | number;
  height?: string | number;
  color?: string;
  rotate?: string | number;
  name?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default class Button extends AbstractComponent<IIconProps, {}> {
  getModifierObject(): IModifiers {
    return {
      size: this.props.size,
      width: this.props.width,
      height: this.props.height,
      color: this.props.color,
      rotate: this.props.rotate,
      clickable: !!this.props.onClick,
    };
  }

  render() {
    return (
      <div
        className={this.getBlockName('icon', this.getModifierObject())}
        onClick={this.props.onClick}
      >
        {settings.getIcon(this.props.name)}
      </div>
    )
  }
}
