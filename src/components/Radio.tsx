import React, {
  KeyboardEvent,
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useContext,
} from "react";

import Icon from "./Icon";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface RadioProps {
  size?: string | number;
  variant?: string;
  color?: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  checked?: boolean;
  theme?: string;
  data?: Record<string, string>;
  onChange?: (
    value: string,
    event: MouseEvent<HTMLDivElement>,
    data: Record<string, string>,
  ) => void;
  onKeyDown?: (
    value: string,
    event: KeyboardEvent<HTMLDivElement>,
    data: Record<string, string>,
  ) => void;
}

export default function Radio({
  name,
  size,
  variant,
  color,
  disabled,
  checked,
  value,
  theme,
  children,
  data = {},
  onChange,
  onKeyDown,
  ...props
}: PropsWithChildren<RadioProps>) {
  const themeContext = useContext(ThemeContext);

  const handleChange = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (typeof onChange === "function") {
        onChange(value, event, data);
      }
    },
    [value, data, onChange],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (typeof onKeyDown === "function") {
        onKeyDown(value, event, data);
      }
      if (["Enter", " "].indexOf(event.key) !== -1) {
        if (typeof onChange === "function") {
          onChange(value, null, data);
        }
      }
    },
    [value, data, onKeyDown, onChange],
  );

  return (
    <div
      className={className("radio")}
      data-name={name}
      data-size={size}
      data-variant={variant}
      data-color={color}
      data-theme={theme ?? themeContext}
      aria-disabled={disabled}
      aria-checked={checked}
      tabIndex={0}
      onClick={handleChange}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <div className={className("radio", "icon")}>
        {checked ? <Icon size={size} icon="radio" /> : null}
      </div>
      <div>{children}</div>
    </div>
  );
}
