import React, { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent, useCallback, useContext, useMemo } from "react";

import { className } from "../utils/className";
import { useEvent } from "../utils/useEvent";
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
  inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
  pattern?: string;

  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (value: string, event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (value: string, event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (value: string, event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (value: string, event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (value: string, event: FocusEvent<HTMLInputElement>) => void;
  onSubmit?: (value: string, event: KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (value: string, event: MouseEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  const { label, onSubmit, onKeyDown } = props;

  const theme = useContext(ThemeContext);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (typeof onKeyDown === "function") {
      onKeyDown(event.currentTarget.value, event);
    }
    if (event.isPropagationStopped()) {
      return;
    }
    if (
      typeof onSubmit === "function" &&
      ["Enter", "NumpadEnter"].indexOf(event.key) !== -1 && !event.shiftKey
    ) {
      onSubmit(event.currentTarget.value, event);
    }
  }, []);

  const labelElement = useMemo(() => {
    return label ? (
      <div className={className("input", "label")}>{label}</div>
    ) : null;
  }, [label]);

  return (
    <div
      className={className("input")}
      data-size={props.size}
      data-variant={props.variant}
      data-color={props.color}
      data-shape={props.shape}
      data-theme={theme}
    >
      {labelElement}
      <input
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        type={props.type}
        inputMode={props.inputMode}
        pattern={props.pattern}
        onChange={useEvent(props.onChange)}
        onKeyDown={handleKeyDown}
        onKeyUp={useEvent(props.onKeyUp)}
        onKeyPress={useEvent(props.onKeyPress)}
        onFocus={useEvent(props.onFocus)}
        onBlur={useEvent(props.onBlur)}
        onClick={useEvent(props.onClick)}
      />
    </div>
  );
}
