import React, { MouseEvent } from "react";

import settings from "../services/settingService";
import { className } from "../utils/className";

export interface IconProps {
  size?: string | number;
  width?: string | number;
  height?: string | number;
  color?: string;
  rotate?: string | number;
  icon?: string;

  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function Icon(props: IconProps) {
  return (
    <span
      className={className("icon")}
      data-size={props.size}
      data-width={props.width}
      data-height={props.height}
      data-color={props.color}
      data-rotate={props.rotate}
      onClick={props.onClick}
    >
      {settings.getIcon(props.icon)}
    </span>
  );
}
