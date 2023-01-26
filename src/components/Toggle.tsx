import React, { PropsWithChildren, useCallback } from "react";

import { className } from "../utils/className";

export interface ToggleProps {
  size?: string | number;
  color?: string;
  disabled?: boolean;
  checked?: boolean;

  onChange?: (value: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Toggle(props: PropsWithChildren<ToggleProps>) {
  const { checked, onChange } = props;

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof onChange === "function") {
      onChange(!checked, e);
    }
  }, [checked, onChange]);

  return (
    <div
      className={className("toggle")}
      role="checkbox"
      tabIndex={0}
      aria-disabled={props.disabled}
      aria-checked={props.checked}
      data-size={props.size}
      data-color={props.color}

      onClick={handleClick}
    >
      <div className={className("toggle", "container")}>
        <div className={className("toggle", "line")} />
        <div className={className("toggle", "handle")} />
      </div>
      {props.children ? (
        <div className={className("toggle", "label")}>
          {props.children}
        </div>
      ) :  null}
    </div>
  );
}
