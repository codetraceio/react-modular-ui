import React, { useContext } from "react";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface ProgressProps {
  size?: string | number;
  color?: string;
  theme?: string;
  value: number;
}

export default function Progress({
  size,
  color,
  theme,
  value,
  ...props
}: ProgressProps) {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={className("progress")}
      data-size={size}
      data-color={color}
      data-theme={theme ?? themeContext}
      {...props}
    >
      <div
        className={className("progress", "line")}
        style={{width: `${Math.round(value || 0)}%`}}
      />
    </div>
  );
}
