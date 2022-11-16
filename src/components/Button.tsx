import React, { PropsWithChildren, MouseEvent } from "react";

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
  return (
    <div
      className="c-button"
      data-name={props.name}
      data-size={props.size}
      data-variant={props.variant}
      data-color={props.color}
      data-shape={props.shape}
      aria-disabled={props.disabled}
      tabIndex={props.disabled ? -1 : 0}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}
