import React, { PropsWithChildren, useCallback, useContext } from "react";

import Icon from "./Icon";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface RadioProps {
  size?: string | number;
  variant?: string;
  color?: string;
  disabled?: boolean;
  name?: string;
  value?: string | number | boolean;
  checked?: boolean;
  theme?: string;

  onChange?: (
    value: string | number | boolean,
    event: React.MouseEvent<HTMLDivElement>,
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
  onChange,
  ...props
}: PropsWithChildren<RadioProps>) {
  const themeContext = useContext(ThemeContext);

  const handleChange = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (typeof onChange === "function") {
        onChange(value, event);
      }
    },
    [value, onChange],
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
      {...props}
    >
      <div className={className("radio", "icon")}>
        {checked ? <Icon size={size} icon="radio" /> : null}
      </div>
      <div>{children}</div>
    </div>
  );
}
