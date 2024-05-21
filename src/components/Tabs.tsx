import React, { PropsWithChildren, useLayoutEffect, useCallback, useMemo, useRef, useContext  } from "react";

import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface TabsOption {
  title: string;
  value: string;
  count?: number;
  countColor?: string;
}

export interface TabsProps {
  size?: string | number;
  color?: string;
  variant?: string;
  disabled?: boolean;
  theme?: string;
  options: TabsOption[] | Readonly<TabsOption[]>;
  value: string;
  noLine?: boolean;

  onChange?: (value: string | number, option: TabsOption) => void;
}

function updateLine(tabs: HTMLDivElement, line: HTMLDivElement, value: string) {
  const tab = tabs?.querySelector(`[data-name='${value}']`);
  if (!tabs || !line || !tab) {
    return;
  }

  let left = 0;
  let width = 0;
  if (tab) {
    const elementRect = tabs.getBoundingClientRect();
    const optionRect = tab.getBoundingClientRect();
    left = optionRect.left - elementRect.left + tabs.scrollLeft;
    width = optionRect.right - optionRect.left;
  }

  line.style.left = `${left}px`;
  line.style.width = `${width}px`;
}

export default function Tabs({
  size,
  value,
  color,
  theme,
  variant,
  disabled,
  children,
  options,
  noLine,

  onChange,
  ...props
}: PropsWithChildren<TabsProps>) {
  const themeContext = useContext(ThemeContext);

  const tabsRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    updateLine(tabsRef.current, lineRef.current, value);
  }, [value]);

  const handleChangeCreator = useCallback((value: string | number, option: TabsOption) => () => {
    if (typeof onChange === "function") {
      onChange(value, option);
    }
  }, [onChange]);

  const lineElement = useMemo(() => {
    return (
      <div
        ref={lineRef}
        className={className("tabs", "line")}
      />
    );
  }, []);

  const renderCount = useCallback((option: TabsOption) => {
    if (typeof option.count !== "string" && typeof option.count !== "number") {
      return null;
    }
    return (
      <div className={className("tabs", "count")}>
        {option.count}
      </div>
    );
  }, []);

  const optionsElement = useMemo(() => {
    return options.map((option) => {
      return (
        <div
          key={option.value}
          className={className("tabs", "option")}
          data-name={option.value}
          data-selected={option.value === value}
          role="button"
          tabIndex={disabled ? -1 : 0}
          onClick={handleChangeCreator(option.value, option)}
        >
          <div>{option.title}</div>
          {renderCount(option)}
        </div>
      );
    });
  }, [options, disabled, value, renderCount, handleChangeCreator]);

  return (
    <div
      className={className("tabs")}
      data-size={size}
      data-color={color}
      data-variant={variant}
      data-disabled={disabled}
      data-theme={theme ?? themeContext}
      {...props}
    >
      <div ref={tabsRef} className={className("tabs", "options")}>
        {optionsElement}
        {!noLine ? lineElement : null}
      </div>
      {children}
    </div>
  );
}
