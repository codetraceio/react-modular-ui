import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { updateDropDown } from "../utils/updateDropDown";
import { className } from "../utils/className";
import clickOutsideService from "../services/clickOutsideService";

import Icon from "./Icon";

export interface SelectProps {
  placeholder?: string;
  label?: string;
  size?: string | number;
  variant?: string;
  disabled?: boolean;
  options?: SelectOption[];
  value?: string;

  onChange?: (value: string, option: SelectOption) => void;
}

export interface SelectOption {
  title: string;
  value: string;
}

export default function Select(props: SelectProps) {
  const { label, value, options, placeholder, onChange } = props;

  const dropdownRef = useRef<HTMLDivElement>();
  const selectRef = useRef<HTMLDivElement>();

  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(state => !state);
  }, [setOpen]);

  const handleUpdate = useCallback(() => {
    updateDropDown(dropdownRef.current, selectRef.current);
  }, []);

  useLayoutEffect(() => {
    if (open) {
      updateDropDown(dropdownRef.current, selectRef.current);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", handleUpdate, true);
    window.addEventListener("resize", handleUpdate, true);

    return () => {
      window.removeEventListener("scroll", handleUpdate, true);
      window.removeEventListener("resize", handleUpdate, true);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setOpen(false);
    };
    if (open && dropdownRef.current) {
      clickOutsideService.on(dropdownRef.current, handleClickOutside);
    }
    return () => {
      clickOutsideService.off(dropdownRef.current);
    };
  });

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
  }, []);

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
      <div className={className("select", "dropdown")} ref={dropdownRef}>
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
  }, [options, value]);

  const portalElement = useMemo(() => {
    if (!open || !options || options.length === 0) {
      return null;
    }
    return createPortal(optionsElement, document.body);
  }, [open, options]);

  return (
    <div
      className={className("select")}
      data-size={props.size}
      data-variant={props.variant}
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
