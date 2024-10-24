import React, { MouseEvent, useCallback, useContext } from "react";
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
  theme?: string;
  verticalAlign?: string;
  data?: Record<string, string>;

  onClick?: (
    event: MouseEvent<HTMLDivElement>,
    data: Record<string, string>,
  ) => void;
}

export default function Icon({
  icon,
  size,
  width,
  height,
  color,
  rotate,
  theme,
  disabled,
  verticalAlign,
  data = {},
  onClick,
  ...props
}: IconProps) {
  const themeContext = useContext(ThemeContext);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (typeof onClick === "function") {
        onClick(event, data);
      }
    },
    [data, onClick],
  );

  return (
    <span
      className={className("icon")}
      data-size={size}
      data-width={width}
      data-height={height}
      data-color={color}
      data-rotate={rotate}
      data-theme={theme ?? themeContext}
      data-clickable={!!onClick}
      data-vertical-align={verticalAlign}
      aria-disabled={disabled}
      role={onClick && "button"}
      tabIndex={onClick && !disabled ? 0 : -1}
      onClick={handleClick}
      {...props}
    >
      {configService.getConfig().icons[icon]}
    </span>
  );
}
