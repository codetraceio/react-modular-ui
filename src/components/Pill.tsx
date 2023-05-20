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

export default function Pill(props: PropsWithChildren<PillProps>) {
  const theme = useContext(ThemeContext);

  return (
    <span
      className={className("pill")}
      data-size={props.size}
      data-color={props.color}
      data-variant={props.variant}
      data-padding-left={props.paddingLeft}
      data-padding-right={props.paddingRight}
      data-theme={props.theme ?? theme}
      onClick={props.onClick}
    >
      {props.children}
    </span>
  );
}
