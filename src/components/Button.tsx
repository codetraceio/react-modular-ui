import React, { PropsWithChildren, MouseEvent, useContext } from "react";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface ButtonProps {
  size?: number;
  variant?: string;
  color?: string;
  disabled?: boolean;
  shape?: string;
  name?: string;

  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function Button<T extends ButtonProps>(props: PropsWithChildren<T>) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={className("button")}
      data-name={props.name}
      data-size={props.size}
      data-variant={props.variant}
      data-color={props.color}
      data-shape={props.shape}
      data-theme={theme}
      aria-disabled={props.disabled}
      tabIndex={props.disabled ? -1 : 0}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}
