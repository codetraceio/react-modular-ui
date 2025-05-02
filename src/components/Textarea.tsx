import React, { useContext, useMemo } from "react";

import { className } from "../utils/className";
import { useEvent } from "../hooks/useEvent";
import { ThemeContext } from "./ThemeContext";

export interface TextareaProps {
  size?: string | number;
  variant?: string;
  color?: string;
  disabled?: boolean;
  height?: string | number;
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  theme?: string;
  data?: Record<string, string>;

  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  onKeyDown?: (
    value: string,
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => void;
  onKeyUp?: (
    value: string,
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => void;
  onFocus?: (
    value: string,
    event: React.FocusEvent<HTMLTextAreaElement>,
  ) => void;
  onBlur?: (
    value: string,
    event: React.FocusEvent<HTMLTextAreaElement>,
  ) => void;
}

export default function Textarea({
  size,
  variant,
  color,
  disabled,
  height,
  label,
  name,
  placeholder,
  value,
  theme,
  data = {},
  onChange,
  onKeyDown,
  onKeyUp,
  onFocus,
  onBlur,
  ...props
}: TextareaProps) {
  const themeContext = useContext(ThemeContext);

  const labelElement = useMemo(() => {
    return label ? (
      <div className={className("textarea", "label")}>{label}</div>
    ) : null;
  }, [label]);

  return (
    <div
      className={className("textarea")}
      data-size={size}
      data-variant={variant}
      data-color={color}
      data-theme={theme ?? themeContext}
      aria-disabled={disabled}
      {...props}
    >
      {labelElement}
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        style={{
          height: height,
        }}
        onChange={useEvent(onChange, data)}
        onKeyDown={useEvent(onKeyDown, data)}
        onKeyUp={useEvent(onKeyUp, data)}
        onFocus={useEvent(onFocus, data)}
        onBlur={useEvent(onBlur, data)}
      />
    </div>
  );
}
