import React, {
  Children,
  cloneElement,
  DragEvent,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useRef,
  useState,
  useCallback,
  useContext,
  KeyboardEvent,
} from "react";

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
  placement?: string;
  clickDisabled?: boolean;
  dropDisabled?: boolean;
  multiple?: boolean;
  data?: Record<string, string>;

  onChange?: (files: FileList, data: Record<string, string>) => void;
}

function applyPlacement(
  children: React.ReactNode,
  placement?: string,
): React.ReactNode {
  if (placement === undefined) {
    return children;
  }

  return Children.map(children, (child) =>
    isValidElement(child)
      ? cloneElement(child as ReactElement, { placement })
      : child,
  );
}

export default function Upload({
  name,
  size,
  color,
  theme,
  disabled,
  variant,
  placement,
  clickDisabled,
  dropDisabled,
  children,
  multiple,
  data = {},
  onChange,
  ...props
}: PropsWithChildren<UploadProps>) {
  const themeContext = useContext(ThemeContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const [active, setActive] = useState(false);

  const handleDragOver = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      if (!event.dataTransfer.types.includes("Files")) {
        return;
      }
      event.preventDefault();
      setActive(true);
    },
    [setActive],
  );

  const handleDragLeave = useCallback(() => {
    setActive(false);
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      if (!event.dataTransfer.types.includes("Files")) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();

      const files = event.dataTransfer.files;

      setActive(false);

      if (typeof onChange === "function") {
        onChange(files, data);
      }
    },
    [data, setActive, onChange],
  );

  const handleClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.click();
  }, []);

  const handleChange = useCallback(() => {
    const files = inputRef.current.files;

    if (typeof onChange === "function") {
      onChange(files, data);
    }
  }, [data, onChange]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (["Enter", " "].indexOf(event.key) !== -1) {
        handleClick();
      }
    },
    [handleClick],
  );

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
      onKeyDown={!disabled ? handleKeyDown : null}
      {...props}
    >
      <input
        type="file"
        name={name}
        style={{ display: "none" }}
        ref={inputRef}
        multiple={multiple}
        onChange={handleChange}
      />
      {applyPlacement(children, placement)}
    </div>
  );
}
