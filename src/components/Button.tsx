import React, {
  PropsWithChildren,
  MouseEvent,
  useContext,
  HTMLAttributeAnchorTarget,
  useCallback,
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
  placement?: string;
  data?: Record<string, string>;

  onClick?: (
    event: MouseEvent<HTMLElement>,
    data: Record<string, string>,
  ) => void;
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
  placement,
  data = {},
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const themeContext = useContext(ThemeContext);

  const TagName = href ? "a" : "button";

  const handleClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (typeof onClick === "function") {
        onClick(event, data);
      }
    },
    [onClick, data],
  );

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
      data-placement={placement}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      href={href}
      target={target}
      {...props}
    >
      {children}
    </TagName>
  );
}
