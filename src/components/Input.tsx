import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useContext,
  useMemo,
  useRef,
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
  width?: string | number;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  placement?: string;
  pattern?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  theme?: string;
  data?: Record<string, string>;

  onChange?: (
    value: string,
    event: ChangeEvent<HTMLInputElement>,
    data: Record<string, string>,
  ) => void;
  onKeyDown?: (
    value: string,
    event: KeyboardEvent<HTMLInputElement>,
    data: Record<string, string>,
  ) => void;
  onKeyUp?: (
    value: string,
    event: KeyboardEvent<HTMLInputElement>,
    data: Record<string, string>,
  ) => void;
  onFocus?: (
    value: string,
    event: FocusEvent<HTMLInputElement>,
    data: Record<string, string>,
  ) => void;
  onBlur?: (
    value: string,
    event: FocusEvent<HTMLInputElement>,
    data: Record<string, string>,
  ) => void;
  onSubmit?: (
    value: string,
    event: KeyboardEvent<HTMLInputElement>,
    data: Record<string, string>,
  ) => void;
  onClick?: (
    value: string,
    event: MouseEvent<HTMLInputElement>,
    data: Record<string, string>,
  ) => void;
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
  width,
  maxLength,
  placement,
  iconLeft,
  iconRight,
  data = {},
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
  const inputRef = useRef(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (typeof onKeyDown === "function") {
        onKeyDown(event.currentTarget.value, event, data);
      }
      if (event.isPropagationStopped()) {
        return;
      }
      if (
        typeof onSubmit === "function" &&
        ["Enter", "NumpadEnter"].indexOf(event.key) !== -1 &&
        !event.shiftKey
      ) {
        onSubmit(event.currentTarget.value, event, data);
      }
    },
    [data, onKeyDown, onSubmit],
  );

  const handleClick = useCallback(() => {
    inputRef?.current?.focus();
  }, []);

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
      data-width={width}
      data-placement={placement}
      data-theme={theme ?? themeContext}
      onClick={handleClick}
      {...props}
    >
      {labelElement}
      <div className={className("input", "container")}>
        {iconLeft}
        <input
          ref={inputRef}
          name={name}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          type={type}
          inputMode={inputMode}
          pattern={pattern}
          maxLength={maxLength}
          onChange={useEvent(onChange, data)}
          onKeyDown={handleKeyDown}
          onKeyUp={useEvent(onKeyUp, data)}
          onFocus={useEvent(onFocus, data)}
          onBlur={useEvent(onBlur, data)}
          onClick={useEvent(onClick, data)}
        />
        {iconRight}
      </div>
    </div>
  );
}
