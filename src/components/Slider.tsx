import React, {
  KeyboardEvent,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { className } from "../utils/className";

export interface SliderProps {
  value: number;
  total: number;
  size?: number;
  data?: Record<string, string>;
  variant?: string;
  disabled?: boolean;
  onChange(value: number, data: Record<string, string>): void;
  onBlur?(value: number, data: Record<string, string>): void;
  // Event handlers
  onMouseDown?(event: ReactMouseEvent<HTMLDivElement>): void;
  onMouseUp?(event: ReactMouseEvent<HTMLDivElement>): void;
  onMouseMove?(event: ReactMouseEvent<HTMLDivElement>): void;
  onMouseLeave?(event: ReactMouseEvent<HTMLDivElement>): void;
  // deprecated
  height?: number;
}

function onGlobalMouseUp(callback: () => void) {
  const onMouseUp = () => {
    callback();
    document.removeEventListener("mouseup", onMouseUp);
  };
  document.addEventListener("mouseup", onMouseUp);
}

function handleMouseMove(
  element: HTMLElement,
  clientX: number,
  total: number,
  data: Record<string, string>,
  onChange: (value: number, data: Record<string, string>) => void,
  onBlur?: (value: number, data: Record<string, string>) => void,
) {
  const rect = element.getBoundingClientRect();
  const positionLeft = clientX - rect.left;
  const width = rect.width;
  const percent = positionLeft / width;

  let value = Math.round(total * percent);

  onChange(value, data);

  const onMouseMove = (event: MouseEvent) => {
    const positionLeft = event.clientX - rect.left;
    const width = rect.width;
    const percent = Math.min(1, Math.max(0, positionLeft / width));

    value = Math.round(total * percent);

    onChange(value, data);
  };

  document.addEventListener("mousemove", onMouseMove);

  onGlobalMouseUp(() => {
    if (onBlur) {
      onBlur(value, data);
    }
    document.removeEventListener("mousemove", onMouseMove);
  });
}

function handleTouchMove(
  element: HTMLElement,
  clientX: number,
  total: number,
  data: Record<string, string>,
  onChange: (value: number, data: Record<string, string>) => void,
  onBlur?: (value: number, data: Record<string, string>) => void,
) {
  const rect = element.getBoundingClientRect();
  const positionLeft = clientX - rect.left;
  const width = rect.width;
  const percent = positionLeft / width;

  let value = Math.round(total * percent);

  onChange(value, data);

  const onTouchMove = (event: TouchEvent) => {
    const positionLeft = event.touches[0].clientX - rect.left;
    const width = rect.width;
    const percent = Math.min(1, Math.max(0, positionLeft / width));

    value = Math.round(total * percent);

    onChange(value, data);
  };

  document.addEventListener("touchmove", onTouchMove);

  onGlobalMouseUp(() => {
    if (onBlur) {
      onBlur(value, data);
    }
    document.removeEventListener("touchmove", onTouchMove);
  });
}

export default function Slider({
  value,
  total,
  size,
  height,
  variant,
  disabled,
  data = {},
  onChange,
  onBlur,
  onMouseDown: onMouseDownProp,
  onMouseUp: onMouseUpProp,
  onMouseMove: onMouseMoveProp,
  onMouseLeave: onMouseLeaveProp,
}: SliderProps) {
  const [currentValue, setCurrentValue] = useState(value);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (!dragging) {
      setCurrentValue(value);
    }
  }, [value, dragging]);

  const handleChange = useCallback(
    (newValue: number, data: Record<string, string>) => {
      setCurrentValue(newValue);
      onChange(newValue, data);
    },
    [onChange],
  );

  const handleBlur = useCallback(
    (newValue: number, data: Record<string, string>) => {
      if (onBlur) {
        onBlur(newValue, data);
      }
      setDragging(false);
    },
    [onBlur],
  );

  const handleMouseDown = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      if (onMouseDownProp) {
        onMouseDownProp(event);
      }

      if (event.button !== 0) {
        return;
      }
      const element = event.currentTarget;
      const clientX = event.clientX;
      handleMouseMove(element, clientX, total, data, handleChange, handleBlur);
      setDragging(true);
    },
    [total, data, handleChange, handleBlur, onMouseDownProp],
  );

  const handleMouseUp = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      if (onMouseUpProp) {
        onMouseUpProp(event);
      }
    },
    [onMouseUpProp],
  );

  const handleMouseMoveEvent = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      if (onMouseMoveProp) {
        onMouseMoveProp(event);
      }
    },
    [onMouseMoveProp],
  );

  const handleMouseLeave = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      if (onMouseLeaveProp) {
        onMouseLeaveProp(event);
      }
    },
    [onMouseLeaveProp],
  );

  const handleTouchStart = useCallback(
    (event: ReactTouchEvent<HTMLDivElement>) => {
      const element = event.currentTarget;
      const clientX = event.touches[0].clientX;
      handleTouchMove(element, clientX, total, data, handleChange, handleBlur);
      setDragging(true);
    },
    [total, data, handleChange, handleBlur],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
        handleChange(Math.max(0, currentValue - 1), data);
      } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
        handleChange(Math.min(total, currentValue + 1), data);
      }
    },
    [currentValue, total, data, handleChange],
  );

  const percent = Math.max(Math.min((currentValue * 100) / total, 100), 0);

  return (
    <div
      className={className("slider")}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMoveEvent}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      data-size={size}
      data-height={height}
      data-variant={variant}
    >
      <div className={className("slider", "track")} />
      <div className={className("slider", "container")}>
        <div
          className={className("slider", "progress")}
          style={{
            width: `${percent}%`,
          }}
        />
        <div
          className={className("slider", "handle")}
          style={{
            left: `${percent}%`,
          }}
        />
      </div>
    </div>
  );
}
