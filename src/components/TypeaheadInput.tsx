import React, { useRef, useState, useMemo, useCallback, KeyboardEvent, MouseEvent, ChangeEvent, FocusEvent, useLayoutEffect, useEffect } from "react";

import Input from "./Input";
import { updateDropDown } from "../utils/updateDropDown";
import { className } from "../utils/className";
import { createPortal } from "react-dom";
export interface TypeaheadInputProps {
  size?: string | number;
  variant?: string;
  color?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  shape?: string;
  fixed?: boolean;
  options?: string[];
  matchingOptionsOnly?: boolean;
  hideInitialOptions?: boolean;

  portal?: JSX.Element[];

  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (value: string, event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (value: string, event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (value: string, event: KeyboardEvent<HTMLInputElement>) => void;
  onSubmit?: (value: string, event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (value: string, event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (value: string, event: FocusEvent<HTMLInputElement>) => void;
  onClick?: (value: string, event: MouseEvent<HTMLInputElement>) => void;
}

export default function TypeaheadInput(props: TypeaheadInputProps) {
  const dropdownRef = useRef<HTMLDivElement>();
  const wrapperRef = useRef<HTMLDivElement>();

  const { options, value, onBlur, onFocus, onChange } = props;

  const [open, setOpen] = useState(false);

  const matchingOptions = useMemo(() => {
    return options.filter((option) => option.toLowerCase().includes(value.toLowerCase()));
  }, [options, value]);
  
  const optionSet = useMemo(() => {
    const set = new Set<string>();
    options.forEach((option) => {
      set.add(option);
    });
    return set;
  }, [options]);

  const handleUpdate = useCallback(() => {
    updateDropDown(dropdownRef.current, wrapperRef.current);
  }, []);

  useLayoutEffect(() => {
    if (open) {
      updateDropDown(dropdownRef.current, wrapperRef.current);
    }
  }, [open]);

  useEffect(() => {
    window.addEventListener("scroll", handleUpdate, true);
    window.addEventListener("resize", handleUpdate, true);

    return () => {
      window.removeEventListener("scroll", handleUpdate, true);
      window.removeEventListener("resize", handleUpdate, true);
    };
  }, []);

  const handleClickCreator = useCallback((option: string) => () => {
    onChange(option, null);

    setOpen(false);
  }, [onChange]);

  const handleFocus = useCallback((value: string, event: FocusEvent<HTMLInputElement>) => {
    setOpen(true);

    onFocus(value, event);
  }, [setOpen, onFocus]);

  const handleBlur = useCallback((value: string, event: FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget && (
      event.relatedTarget.classList.contains(className("typeahead-input", "dropdown")) ||
      event.relatedTarget.classList.contains(className("typeahead-input", "option"))
    )) {
      return;
    }
    setOpen(false);

    onBlur(value, event);
  }, [setOpen, onBlur]);

  const dropdownElement = useMemo(() => {
    if (matchingOptions.length === 0 || matchingOptions.length === 1 && matchingOptions[0] === value) {
      return;
    }

    return (
      <div
        className={className("typeahead-input", "dropdown")}
        ref={dropdownRef}
      >
        {matchingOptions.map((option: string) => {
          return (
            <div
              key={option}
              className={className("typeahead-input", "option")}
              tabIndex={0}
              aria-selected={value === option}
              onClick={handleClickCreator(option)}
            >
              {option}
            </div>
          );
        })}
      </div>
    );
  }, [matchingOptions, handleClickCreator, value]);

  const portalElement = useMemo(() => {
    if (!open) {
      return;
    }
    return createPortal(dropdownElement, document.body);
  }, [open, dropdownElement]);

  return (
    <div
      className={className("typeahead-input")}
      ref={wrapperRef}
    >
      <Input
        size={props.size}
        variant={props.variant}
        color={props.color || optionSet.has(props.value) && "success"}
        disabled={props.disabled}
        name={props.name}
        label={props.label}
        value={props.value}
        placeholder={props.placeholder}
        shape={props.shape}

        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        onKeyPress={props.onKeyPress}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSubmit={props.onSubmit}
        onClick={props.onClick}
      />
      {portalElement}
    </div>
  );
}
