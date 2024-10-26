import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  KeyboardEvent,
  MouseEvent,
  ChangeEvent,
  FocusEvent,
  useLayoutEffect,
  useEffect,
  useContext,
} from "react";
import { createPortal } from "react-dom";

import Input from "./Input";
import { updateDropDown } from "../utils/updateDropDown";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export enum TypeaheadInputFilter {
  includes = "includes",
  startsWith = "startsWith",
  endsWith = "endsWith",
}

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
  filter?: TypeaheadInputFilter;
  placement?: string;
  theme?: string;
  data?: Record<string, string>;

  portal?: JSX.Element[];

  onChange?: (
    value: string,
    event: ChangeEvent<HTMLInputElement>,
    data: Record<string, string>,
  ) => void;
  onKeyDown?: (
    value: string,
    event: KeyboardEvent<HTMLInputElement>,
    data: Record<string, string>,
  ) => void;
  onKeyUp?: (
    value: string,
    event: KeyboardEvent<HTMLInputElement>,
    data: Record<string, string>,
  ) => void;
  onSubmit?: (
    value: string,
    event: KeyboardEvent<HTMLInputElement>,
    data: Record<string, string>,
  ) => void;
  onFocus?: (
    value: string,
    event: FocusEvent<HTMLInputElement>,
    data: Record<string, string>,
  ) => void;
  onBlur?: (
    value: string,
    event: FocusEvent<HTMLInputElement>,
    data: Record<string, string>,
  ) => void;
  onClick?: (
    value: string,
    event: MouseEvent<HTMLInputElement>,
    data: Record<string, string>,
  ) => void;
}

export default function TypeaheadInput({
  options,
  value,
  filter = TypeaheadInputFilter.includes,
  theme,
  size,
  variant,
  color,
  disabled,
  name,
  label,
  placeholder,
  shape,
  placement,
  data = {},
  onSubmit,
  onClick,
  onBlur,
  onFocus,
  onChange,
  onKeyDown,
  onKeyUp,
  ...props
}: TypeaheadInputProps) {
  const dropdownRef = useRef<HTMLDivElement>();
  const wrapperRef = useRef<HTMLDivElement>();
  const themeContext = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const matchingOptions = useMemo(() => {
    return options.filter((option) =>
      option.toLowerCase()[filter](value.toLowerCase()),
    );
  }, [options, value, filter]);

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
  }, [open, value]);

  useEffect(() => {
    window.addEventListener("scroll", handleUpdate, true);
    window.addEventListener("resize", handleUpdate, true);

    return () => {
      window.removeEventListener("scroll", handleUpdate, true);
      window.removeEventListener("resize", handleUpdate, true);
    };
  }, [handleUpdate]);

  const handleClickCreator = useCallback(
    (option: string) => () => {
      if (onChange) {
        onChange(option, null, data);
      }
      if (onBlur) {
        onBlur(option, null, data);
      }

      setOpen(false);
    },
    [data, setOpen, onChange, onBlur],
  );

  const handleFocus = useCallback(
    (value: string, event: FocusEvent<HTMLInputElement>) => {
      setOpen(true);

      if (onFocus) {
        onFocus(value, event, data);
      }
    },
    [data, setOpen, onFocus],
  );

  const handleBlur = useCallback(
    (value: string, event: FocusEvent<HTMLInputElement>) => {
      if (
        event.relatedTarget &&
        (event.relatedTarget.classList.contains(
          className("typeahead-input", "dropdown"),
        ) ||
          event.relatedTarget.classList.contains(
            className("typeahead-input", "option"),
          ))
      ) {
        return;
      }
      setOpen(false);

      if (onBlur) {
        onBlur(value, event, data);
      }
    },
    [data, setOpen, onBlur],
  );

  const dropdownElement = useMemo(() => {
    if (
      matchingOptions.length === 0 ||
      (matchingOptions.length === 1 && matchingOptions[0] === value)
    ) {
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
      data-theme={theme ?? themeContext}
      ref={wrapperRef}
      {...props}
    >
      <Input
        size={size}
        variant={variant}
        color={color || (optionSet.has(value) && "success")}
        disabled={disabled}
        name={name}
        label={label}
        value={value}
        placement={placement}
        placeholder={placeholder}
        shape={shape}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSubmit={onSubmit}
        onClick={onClick}
      />
      {portalElement}
    </div>
  );
}
