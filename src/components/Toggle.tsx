import React, { PropsWithChildren, useCallback, useContext } from "react";

import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface ToggleProps {
  size?: string | number;
  color?: string;
  disabled?: boolean;
  checked?: boolean;
  theme?: string;

  onChange?: (value: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Toggle({
  size,
  color,
  disabled,
  checked,
  theme,
  children,
  onChange,
  ...props
}: PropsWithChildren<ToggleProps>) {
  const themeContext = useContext(ThemeContext);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof onChange === "function") {
      onChange(!checked, e);
    }
  }, [checked, onChange]);

  return (
    <div
      className={className("toggle")}
      role="checkbox"
      tabIndex={0}
      aria-disabled={disabled}
      aria-checked={checked}
      data-size={size}
      data-color={color}
      data-theme={theme ?? themeContext}

      onClick={handleClick}
      {...props}
    >
      <div className={className("toggle", "container")}>
        <div className={className("toggle", "line")} />
        <div className={className("toggle", "handle")} />
      </div>
      {children ? (
        <div className={className("toggle", "label")}>
          {children}
        </div>
      ) :  null}
    </div>
  );
}
