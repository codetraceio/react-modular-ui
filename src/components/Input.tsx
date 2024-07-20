import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useContext,
  useMemo,
} from "react";

import { className } from "../utils/className";
import { useEvent } from "../hooks/useEvent";
import { ThemeContext } from "./ThemeContext";

export interface InputProps {
  size?: string | number;
  variant?: string;
  color?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  shape?: string;
  type?: string;
  maxLength?: number;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  pattern?: string;
  theme?: string;

  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (value: string, event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (value: string, event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (value: string, event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (value: string, event: FocusEvent<HTMLInputElement>) => void;
  onSubmit?: (value: string, event: KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (value: string, event: MouseEvent<HTMLInputElement>) => void;
}

export default function Input({
  size,
  variant,
  color,
  disabled,
  name,
  label,
  value,
  placeholder,
  shape,
  type,
  theme,
  inputMode,
  pattern,
  maxLength,
  onChange,
  onKeyDown,
  onKeyUp,
  onFocus,
  onBlur,
  onSubmit,
  onClick,
  ...props
}: InputProps) {
  const themeContext = useContext(ThemeContext);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (typeof onKeyDown === "function") {
        onKeyDown(event.currentTarget.value, event);
      }
      if (event.isPropagationStopped()) {
        return;
      }
      if (
        typeof onSubmit === "function" &&
        ["Enter", "NumpadEnter"].indexOf(event.key) !== -1 &&
        !event.shiftKey
      ) {
        onSubmit(event.currentTarget.value, event);
      }
    },
    [onKeyDown, onSubmit],
  );

  const labelElement = useMemo(() => {
    return label ? (
      <div className={className("input", "label")}>{label}</div>
    ) : null;
  }, [label]);

  return (
    <div
      className={className("input")}
      data-size={size}
      data-variant={variant}
      data-color={color}
      data-shape={shape}
      data-theme={theme ?? themeContext}
      {...props}
    >
      {labelElement}
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        type={type}
        inputMode={inputMode}
        pattern={pattern}
        maxLength={maxLength}
        onChange={useEvent(onChange)}
        onKeyDown={handleKeyDown}
        onKeyUp={useEvent(onKeyUp)}
        onFocus={useEvent(onFocus)}
        onBlur={useEvent(onBlur)}
        onClick={useEvent(onClick)}
      />
    </div>
  );
}
