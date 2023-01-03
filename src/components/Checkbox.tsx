import React, { useCallback, PropsWithChildren, MouseEvent } from "react";

export interface CheckboxProps {
  size?: string | number;
  variant?: string;
  color?: string;
  disabled?: boolean;
  checked?: boolean;
  name?: string;

  onChange?: (checked: boolean, event: MouseEvent<HTMLDivElement>) => void;
}

import Icon from "./Icon";
import { className } from "../utils/className";

export default function Checkbox(props: PropsWithChildren<CheckboxProps>) {
  const { checked, onChange } = props;

  const handleChange = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (typeof onChange === "function") {
      onChange(!checked, e);
    }
  }, [checked, onChange]);

  return (
    <div
      className={className("checkbox")}
      data-name={props.name}
      data-size={props.size}
      data-variant={props.variant}
      aria-checked={props.checked}
      aria-disabled={props.disabled}
      tabIndex={props.disabled ? -1 : 1}
      onClick={handleChange}
    >
      <div className={className("checkbox", "icon")}>
        {props.checked ? (
          <Icon
            size={props.size}
            icon="checkbox"
          />
        ) : null}
      </div>
      <div>{props.children}</div>
    </div>
  );
}
