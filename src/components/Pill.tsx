import React, { PropsWithChildren } from "react";
import { className } from "../utils/className";

export interface PillProps {
  size?: string | number;
  color?: string;
  variant?: string;
  paddingLeft?: string | number;
  paddingRight?: string | number;

  onClick?: () => void;
}

export default function Pill(props: PropsWithChildren<PillProps>) {
  return (
    <span
      className={className("pill")}
      data-size={props.size}
      data-color={props.color}
      data-variant={props.variant}
      data-padding-left={props.paddingLeft}
      data-padding-right={props.paddingRight}
      onClick={props.onClick}
    >
      {props.children}
    </span>
  );
}
