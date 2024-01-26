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

  onChange?: (files: FileList) => void
}

export default function Upload({
  name,
  size,
  color,
  theme,
  disabled,
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
      data-theme={theme ?? themeContext}
      aria-disabled={disabled}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
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
