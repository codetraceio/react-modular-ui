import React, { PropsWithChildren, useContext } from "react";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface PillProps {
  size?: string | number;
  color?: string;
  variant?: string;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  theme?: string;

  onClick?: () => void;
}

export default function Pill({
  size,
  color,
  variant,
  paddingLeft,
  paddingRight,
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
      data-theme={theme ?? themeContext}
      onClick={onClick}
      {...props}
    >
      {children}
    </span>
  );
}
