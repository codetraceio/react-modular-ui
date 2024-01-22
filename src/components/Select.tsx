import React, { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { updateDropDown } from "../utils/updateDropDown";
import { className } from "../utils/className";
import clickOutsideService from "../services/clickOutsideService";

import Icon from "./Icon";
import { ThemeContext } from "./ThemeContext";

export interface SelectProps {
  placeholder?: string;
  label?: string;
  size?: string | number;
  variant?: string;
  disabled?: boolean;
  options?: SelectOption[] | Readonly<SelectOption[]>;
  value?: string;
  theme?: string;

  onChange?: (value: string, option: SelectOption) => void;
}

export interface SelectOption {
  title: string;
  value: string;
}

export default function Select(props: SelectProps) {
  const { label, value, options, placeholder, onChange } = props
  const theme = useContext(ThemeContext);

  const dropdownRef = useRef<HTMLDivElement>();
  const selectRef = useRef<HTMLDivElement>();

  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(state => !state);
  }, [setOpen]);

  const handleUpdate = useCallback(() => {
    updateDropDown(dropdownRef.current, selectRef.current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleUpdate, true);
    window.addEventListener("resize", handleUpdate, true);

    return () => {
      window.removeEventListener("scroll", handleUpdate, true);
      window.removeEventListener("resize", handleUpdate, true);
    };
  }, [handleUpdate]);

  useEffect(() => {
    const handleClickOutside = () => {
      setOpen(false);
    };
    const dropdown = dropdownRef.current;
    const select = selectRef.current;
    if (open && dropdown) {
      clickOutsideService.on(dropdown, [select], handleClickOutside);
    }
    return () => {
      clickOutsideService.off(dropdown);
    };
  }, [open]);

  useLayoutEffect(() => {
    if (open) {
      updateDropDown(dropdownRef.current, selectRef.current);
    }
  }, [open]);

  const titleElement = useMemo(() => {
    if (value) {
      const option: SelectOption = options.find((option: SelectOption) => {
        return option.value === value;
      });
      if (option) {
        return option.title;
      }
    }
    return placeholder;
  }, [value, options, placeholder]);

  const handleOptionClickCreator = useCallback((value: string, option: SelectOption) => () => {
    if (typeof onChange === "function") {
      onChange(value, option);
    }

    setOpen(false);
  }, [onChange]);

  const labelElement = useMemo(() => {
    if (!label) {
      return null;
    }

    return (
      <div className={className("select", "label")}>
        {label}
      </div>
    );
  }, [label]);

  const optionsElement = useMemo(() => {
    return (
      <div className={className("select", "dropdown")} ref={dropdownRef} data-theme={theme}>
        {options.map((option: SelectOption) => {
          return (
            <div
              key={option.value}
              className={className("select", "option")}
              aria-selected={option.value === value}
              tabIndex={0}
              onClick={handleOptionClickCreator(option.value, option)}
            >
              {option.title}
            </div>
          );
        })}
      </div>
    );
  }, [options, value, theme, handleOptionClickCreator]);

  const portalElement = useMemo(() => {
    if (!open || !options || options.length === 0) {
      return null;
    }
    return createPortal(optionsElement, document.body);
  }, [open, options, optionsElement]);

  return (
    <div
      className={className("select")}
      data-size={props.size}
      data-variant={props.variant}
      data-theme={props.theme ?? theme}
      aria-disabled={props.disabled}
      tabIndex={props.disabled ? -1 : 0}
    >
      {labelElement}
      <div
        className={className("select", "box")}
        onClick={handleClick}
        ref={selectRef}
      >
        <div className={className("select", "value")}>
          {titleElement}
        </div>
        <div className={className("select", "icon")}>
          <Icon size="12" rotate={open ? 180 : 0} icon="dropdown" />
        </div>
      </div>
      {portalElement}
    </div>
  );
}
