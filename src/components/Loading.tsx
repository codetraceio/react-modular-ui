import React, { useContext } from "react";

import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface LoadingProps {
  size?: string | number;
  color?: string;
  theme?: string;
}

export default function Loading(props: LoadingProps) {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={className("loading")}
      data-size={props.size}
      data-color={props.color}
      data-theme={props.theme ?? theme}
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="40" stroke="none" fill="none" strokeWidth="10">
          <animate
            attributeName="stroke-dashoffset"
            dur="2s"
            repeatCount="indefinite"
            from="0"
            to="-502"
          />
          <animate
            attributeName="stroke-dasharray"
            dur="2s"
            repeatCount="indefinite"      
            values="150.6 100.4;1 250;150.6 100.4"
          />
        </circle>
      </svg>
    </div>
  );
}
