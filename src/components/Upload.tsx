import React, { DragEvent, PropsWithChildren, useRef, useState, useCallback, useContext } from "react";

import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface UploadProps {
  size?: string | number;
  color?: string;
  disabled?: boolean;
  checked?: boolean;
  name?: string;
  theme?: string;
  variant?: string;
  clickDisabled?: boolean;
  dropDisabled?: boolean;

  onChange?: (files: FileList) => void
}

export default function Upload({
  name,
  size,
  color,
  theme,
  disabled,
  variant,
  clickDisabled,
  dropDisabled,
  children,
  onChange,
  ...props
}: PropsWithChildren<UploadProps>) {
  const themeContext = useContext(ThemeContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const [active, setActive] = useState(false);

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setActive(true);
  }, [setActive]);

  const handleDragLeave = useCallback(() => {
    setActive(false);
  }, []);

  const handleDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();

    const files = event.dataTransfer.files;

    setActive(false);

    if (typeof onChange === "function") {
      onChange(files);
    }
  }, [setActive, onChange]);

  const handleClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.click();
  }, []);

  const handleChange = useCallback(() => {
    const files = inputRef.current.files;

    if (typeof onChange === "function") {
      onChange(files);
    }
  }, [onChange]);

  return (
    <div
      className={className("upload")}
      data-name={name}
      data-size={size}
      data-active={active}
      data-color={color}
      data-variant={variant}
      data-theme={theme ?? themeContext}
      data-click-disabled={clickDisabled}
      data-drop-disabled={dropDisabled}
      aria-disabled={disabled}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onDragOver={!dropDisabled && !disabled ? handleDragOver : null}
      onDragLeave={!dropDisabled && !disabled ? handleDragLeave : null}
      onDrop={!dropDisabled && !disabled ? handleDrop : null}
      onClick={!clickDisabled && !disabled ? handleClick : null}
      {...props}
    >
      <input
        type="file"
        name={name}
        style={{display: "none"}}
        ref={inputRef}
        onChange={handleChange}
      />
      <div>
        {children}
      </div>
    </div>
  );
}
