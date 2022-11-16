import React, { PropsWithChildren, MouseEvent } from "react";

export interface ButtonProps {
  size?: number;
  variant?: string;
  color?: string;
  disabled?: boolean;
  name?: string;

  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <div
      className="button"
      data-name={props.name}
      data-size={props.size}
      data-variant={props.variant}
      data-color={props.color}
      aria-disabled={props.disabled}
      tabIndex={props.disabled ? -1 : 0}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}
