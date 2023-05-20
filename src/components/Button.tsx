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
  href?: string;
  target?: string;
  theme?: string;

  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export default function Button<T extends ButtonProps>(props: PropsWithChildren<T>) {
  const theme = useContext(ThemeContext);

  const TagName = props.href ? "a" : "div";

  return (
    <TagName
      className={className("button")}
      href={props.href}
      target={props.target}
      data-name={props.name}
      data-size={props.size}
      data-variant={props.variant}
      data-color={props.color}
      data-shape={props.shape}
      data-theme={props.theme ?? theme}
      aria-disabled={props.disabled}
      tabIndex={props.disabled ? -1 : 0}
      onClick={props.onClick}
    >
      {props.children}
    </TagName>
  );
}
