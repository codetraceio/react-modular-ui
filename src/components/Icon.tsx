import React, { MouseEvent, useContext } from "react";
import configService from "../services/configService";

import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

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
  const theme = useContext(ThemeContext);

  return (
    <span
      className={className("icon")}
      data-size={props.size}
      data-width={props.width}
      data-height={props.height}
      data-color={props.color}
      data-rotate={props.rotate}
      data-theme={theme}
      data-clickable={!!props.onClick}
      aria-disabled={props.disabled}
      tabIndex={props.onClick && !props.disabled ? 0 : -1}
      onClick={props.onClick}
    >
      {configService.getConfig().icons[props.icon]}
    </span>
  );
}
