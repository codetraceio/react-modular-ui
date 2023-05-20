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

  onChange?: (value: string | number | boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Radio(props: PropsWithChildren<RadioProps>) {
  const theme = useContext(ThemeContext);
  const { value, onChange } = props;

  const handleChange = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (typeof onChange === "function") {
      onChange(value, event);
    }
  }, [value, onChange]);

  return (
    <div
      className={className("radio")}
      data-name={props.name}
      data-size={props.size}
      data-variant={props.variant}
      data-color={props.color}
      data-theme={props.theme ?? theme}
      aria-disabled={props.disabled}
      aria-checked={props.checked}
      tabIndex={0}
      onClick={handleChange}
    >
      <div className={className("radio", "icon")}>
        {props.checked ? (
          <Icon
            size={props.size}
            icon="radio"
          />
        ) : null}
      </div>
      <div>{props.children}</div>
    </div>
  );
}