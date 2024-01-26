import React, { PropsWithChildren, MouseEvent, useContext } from "react";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface ButtonProps {
  size?: string | number;
  variant?: string;
  color?: string;
  disabled?: boolean;
  shape?: string;
  name?: string;
  theme?: string;

  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export interface ButtonProps {
  size?: string | number;
  variant?: string;
  color?: string;
  disabled?: boolean;
  shape?: string;
  name?: string;
  theme?: string;

  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export default function Button({
  name,
  size,
  variant,
  color,
  shape,
  theme,
  disabled,
  children,
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const themeContext = useContext(ThemeContext);

  return (
    <button
      className={className("button")}
      data-name={name}
      data-size={size}
      data-variant={variant}
      data-color={color}
      data-shape={shape}
      data-theme={theme ?? themeContext}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
