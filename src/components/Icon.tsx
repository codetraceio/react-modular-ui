import * as React from "react";

import { Modifiers, getBlockName } from "../services/componentService";
import settings from "../services/settingService";

export interface IconProps {
  size?: string | number;
  width?: string | number;
  height?: string | number;
  color?: string;
  rotate?: string | number;
  name?: string;

  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function getModifierObject(props: IconProps): Modifiers {
  return {
    size: props.size,
    width: props.width,
    height: props.height,
    color: props.color,
    rotate: props.rotate,
    clickable: !!props.onClick,
  };
}

export default class Icon extends React.PureComponent<IconProps, {}> {
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
