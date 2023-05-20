import React, { PropsWithChildren, useCallback, useContext } from "react";

import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface ToggleProps {
  size?: string | number;
  color?: string;
  disabled?: boolean;
  checked?: boolean;
  theme?: string;

  onChange?: (value: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Toggle(props: PropsWithChildren<ToggleProps>) {
  const { checked, onChange } = props;
  const theme = useContext(ThemeContext);

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
      data-theme={props.theme ?? theme}

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
