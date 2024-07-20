import React, {
  PropsWithChildren,
  MouseEvent,
  useContext,
  HTMLAttributeAnchorTarget,
} from "react";
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
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  padding?: string | number;
  width?: string | number;
  download?: string;

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
  href,
  target,
  padding,
  width,
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const themeContext = useContext(ThemeContext);

  const TagName = href ? "a" : "button";

  return (
    <TagName
      className={className("button")}
      data-name={name}
      data-size={size}
      data-variant={variant}
      data-color={color}
      data-shape={shape}
      data-theme={theme ?? themeContext}
      data-padding={padding}
      data-width={width}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={onClick}
      href={href}
      target={target}
      {...props}
    >
      {children}
    </TagName>
  );
}
