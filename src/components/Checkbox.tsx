import React, {
  useCallback,
  PropsWithChildren,
  MouseEvent,
  useContext,
  KeyboardEvent,
} from "react";

export interface CheckboxProps {
  size?: string | number;
  variant?: string;
  color?: string;
  disabled?: boolean;
  checked?: boolean;
  name?: string;
  theme?: string;
  data?: Record<string, string>;

  onChange?: (
    checked: boolean,
    event: MouseEvent<HTMLDivElement>,
    data: Record<string, string>,
  ) => void;
  onKeyDown?: (
    event: KeyboardEvent<HTMLDivElement>,
    data: Record<string, string>,
  ) => void;
}

import Icon from "./Icon";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export default function Checkbox({
  checked,
  name,
  size,
  variant,
  theme,
  disabled,
  children,
  data = {},
  onChange,
  onKeyDown,
  ...props
}: PropsWithChildren<CheckboxProps>) {
  const themeContext = useContext(ThemeContext);

  const handleChange = useCallback(
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
      className={className("checkbox")}
      data-name={name}
      data-size={size}
      data-variant={variant}
      data-theme={theme ?? themeContext}
      aria-checked={checked}
      aria-disabled={disabled}
      role="checkbox"
      tabIndex={disabled ? -1 : 0}
      onClick={handleChange}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <div className={className("checkbox", "icon")}>
        {checked ? <Icon size={size} icon="checkbox" /> : null}
      </div>
      <div>{children}</div>
    </div>
  );
}
