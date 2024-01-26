import React, { PropsWithChildren, useContext } from "react";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface ButtonProps {
  size?: string | number;
  variant?: string;
  color?: string;
  disabled?: boolean;
  shape?: string;
  name?: string;
  href?: string;
  target?: string;
  theme?: string;
}

export default function Button({
  href,
  target,
  name,
  size,
  variant,
  color,
  shape,
  theme,
  disabled,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const themeContext = useContext(ThemeContext);

  return (
    <a
      className={className("button")}
      href={href}
      target={target}
      data-name={name}
      data-size={size}
      data-variant={variant}
      data-color={color}
      data-shape={shape}
      data-theme={theme ?? themeContext}
      aria-disabled={disabled}
      role="button"
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {children}
    </a>
  );
}
