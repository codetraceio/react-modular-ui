import React, {
  KeyboardEvent,
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useContext,
} from "react";

import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface ToggleProps {
  size?: string | number;
  color?: string;
  disabled?: boolean;
  checked?: boolean;
  theme?: string;
  data?: Record<string, string>;

  onChange?: (
    value: boolean,
    event: MouseEvent<HTMLDivElement>,
    data: Record<string, string>,
  ) => void;
  onKeyDown?: (
    event: KeyboardEvent<HTMLDivElement>,
    data: Record<string, string>,
  ) => void;
}

export default function Toggle({
  size,
  color,
  disabled,
  checked,
  theme,
  children,
  data = {},
  onChange,
  onKeyDown,
  ...props
}: PropsWithChildren<ToggleProps>) {
  const themeContext = useContext(ThemeContext);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (typeof onChange === "function") {
        onChange(!checked, e, data);
      }
    },
    [checked, data, onChange],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (typeof onKeyDown === "function") {
        onKeyDown(event, data);
      }
      if (event.isPropagationStopped()) {
        return;
      }
      if (["Enter", " "].indexOf(event.key) !== -1) {
        onChange(!checked, null, data);
      }
    },
    [checked, data, onChange, onKeyDown],
  );

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
      onKeyDown={handleKeyDown}
      {...props}
    >
      <div className={className("toggle", "container")}>
        <div className={className("toggle", "line")} />
        <div className={className("toggle", "handle")} />
      </div>
      {children ? (
        <div className={className("toggle", "label")}>{children}</div>
      ) : null}
    </div>
  );
}
