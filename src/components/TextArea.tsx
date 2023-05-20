import React, { useContext, useMemo } from "react";

import { className } from "../utils/className";
import { useEvent } from "../utils/useEvent";
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

  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: (value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onFocus?: (value: string, event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (value: string, event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea(props: TextareaProps) {
  const { label } = props;
  const theme = useContext(ThemeContext);

  const labelElement = useMemo(() => {
    return label ? (
      <div className={className("textarea", "label")}>{label}</div>
    ) : null;
  }, [label]);

  return (
    <div
      className={className("textarea")}
      data-size={props.size}
      data-variant={props.variant}
      data-color={props.color}
      data-theme={props.theme ?? theme}
      aria-disabled={props.disabled}
    >
      {labelElement}
      <textarea
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        style={{
          height: props.height,
        }}
        onChange={useEvent(props.onChange)}
        onKeyDown={useEvent(props.onKeyDown)}
        onKeyUp={useEvent(props.onKeyUp)}
        onFocus={useEvent(props.onFocus)}
        onBlur={useEvent(props.onBlur)}
      />
    </div>
  );
}
