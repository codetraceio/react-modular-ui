import React, { useContext } from "react";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface ProgressProps {
  size?: string | number;
  color?: string;
  value: number;
}

export default function Progress(props: ProgressProps) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={className("progress")}
      data-size={props.size}
      data-color={props.color}
      data-theme={theme}
    >
      <div
        className={className("progress", "line")}
        style={{width: `${Math.round(props.value || 0)}%`}}
      />
    </div>
  );
}
