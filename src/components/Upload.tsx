import React, { DragEvent, PropsWithChildren, useRef, useState, useCallback } from "react";

import { className } from "../utils/className";

export interface UploadProps {
  size?: string | number;
  color?: string;
  disabled?: boolean;
  checked?: boolean;
  name?: string;

  onChange?: (files: FileList) => void
}

export default function Upload(props: PropsWithChildren<UploadProps>) {
  const { onChange } = props;
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
      data-name={props.name}
      data-active={active}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input
        type="file"
        name={props.name}
        style={{display: "none"}}
        ref={inputRef}
        onChange={handleChange}
      />
      <div>
        {props.children}
      </div>
    </div>
  );
}
