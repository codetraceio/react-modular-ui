import React from "react";
import { className } from "../utils/className";

export interface ProgressProps {
  size?: string | number;
  color?: string;
  value: number;
}

export default function Progress(props: ProgressProps) {
  return (
    <div
      className={className("progress")}
      data-size={props.size}
      data-color={props.color}
    >
      <div
        className={className("progress", "line")}
        style={{width: `${Math.round(props.value || 0)}%`}}
      />
    </div>
  );
}
