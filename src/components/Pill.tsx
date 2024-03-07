import React, { PropsWithChildren, useContext } from "react";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface PillProps {
  size?: string | number;
  color?: string;
  variant?: string;
  padding?: string | number;
  width?: string | number;
  theme?: string;

  onClick?: () => void;

  // deprecated
  paddingLeft?: string | number;
  paddingRight?: string | number;
}

export default function Pill({
  size,
  color,
  variant,
  paddingLeft,
  paddingRight,
  padding,
  width,
  theme,
  children,
  onClick,
  ...props
}: PropsWithChildren<PillProps>) {
  const themeContext = useContext(ThemeContext);

  return (
    <span
      className={className("pill")}
      data-size={size}
      data-color={color}
      data-variant={variant}
      data-padding-left={paddingLeft}
      data-padding-right={paddingRight}
      data-padding={padding}
      data-width={width}
      data-theme={theme ?? themeContext}
      onClick={onClick}
      {...props}
    >
      {children}
    </span>
  );
}
