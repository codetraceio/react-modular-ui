import * as React from "react";

import { IModifiers, getBlockName } from "../services/componentService";
import settings from "../services/settingService";

export interface IIconProps {
  size?: string | number;
  width?: string | number;
  height?: string | number;
  color?: string;
  rotate?: string | number;
  name?: string;

  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function getModifierObject(props: IIconProps): IModifiers {
  return {
    size: props.size,
    width: props.width,
    height: props.height,
    color: props.color,
    rotate: props.rotate,
    clickable: !!props.onClick,
  };
}

export default class Icon extends React.PureComponent<IIconProps, {}> {
  render() {
    return (
      <div
        className={getBlockName("icon", getModifierObject(this.props))}
        onClick={this.props.onClick}
      >
        {settings.getIcon(this.props.name)}
      </div>
    );
  }
}
