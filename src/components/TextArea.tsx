import React, { useMemo } from "react";

import { className } from "../utils/className";
import { useEvent } from "../utils/useEvent";

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

  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: (value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyPress?: (value: string, event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onFocus?: (value: string, event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (value: string, event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea(props: TextareaProps) {
  const { label } = props;

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
        onKeyPress={useEvent(props.onKeyPress)}
        onFocus={useEvent(props.onFocus)}
        onBlur={useEvent(props.onBlur)}
      />
    </div>
  );
}
