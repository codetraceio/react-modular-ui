import React, { HTMLAttributes, useContext } from "react";

import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface LoadingProps {
  size?: string | number;
  color?: string;
  theme?: string;
}

export default function Loading({
  size,
  color,
  theme,
  ...props
}: LoadingProps & HTMLAttributes<HTMLDivElement>) {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={className("loading")}
      data-size={size}
      data-color={color}
      data-theme={theme ?? themeContext}
      {...props}
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="none"
          fill="none"
          strokeWidth="10"
        >
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
