import React, { MouseEvent } from "react";
import { getConfig } from "../services/configService";

import { className } from "../utils/className";

export interface IconProps {
  size?: string | number;
  width?: string | number;
  height?: string | number;
  color?: string;
  rotate?: string | number;
  icon?: string;
  disabled?: boolean;

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
      aria-disabled={props.disabled}
      tabIndex={props.onClick && !props.disabled ? 1 : -1}
      onClick={props.onClick}
    >
      {getConfig().icons[props.icon]}
    </span>
  );
}
