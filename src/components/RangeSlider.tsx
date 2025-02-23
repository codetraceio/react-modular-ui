import React, {
  useCallback,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
  KeyboardEvent,
  useState,
  useEffect,
  useRef,
} from "react";
import { className } from "../utils/className";

export interface RangeSliderProps {
  value: [number, number];
  total: number;
  size?: number;
  data?: Record<string, string>;
  variant?: string;
  disabled?: boolean;
  onChange(value: [number, number], data: Record<string, string>): void;
  onBlur?(value: [number, number], data: Record<string, string>): void;
  height?: number;
}

function getClosestHandle(
  clickPosition: number,
  startPosition: number,
  endPosition: number,
): "start" | "end" {
  const distanceToStart = Math.abs(clickPosition - startPosition);
  const distanceToEnd = Math.abs(clickPosition - endPosition);
  return distanceToStart < distanceToEnd ? "start" : "end";
}

function getValueFromPosition(
  clientX: number,
  rect: DOMRect,
  total: number,
): number {
  const positionLeft = clientX - rect.left;
  const percent = Math.min(1, Math.max(0, positionLeft / rect.width));
  return Math.round(total * percent);
}

function onGlobalMouseUp(callback: () => void) {
  const onMouseUp = () => {
    callback();
    document.removeEventListener("mouseup", onMouseUp);
  };
  document.addEventListener("mouseup", onMouseUp);
}

export default function RangeSlider({
  value,
  total,
  size,
  height,
  variant,
  disabled,
  data,
  onChange,
  onBlur,
}: RangeSliderProps) {
  const [currentValues, setCurrentValues] = useState<[number, number]>(value);
  const valuesRef = useRef<[number, number]>(value);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (!dragging) {
      setCurrentValues(value);
    }
  }, [value, dragging]);

  const handleChange = useCallback(
    (newValue: [number, number], data: Record<string, string>) => {
      valuesRef.current = newValue;
      setCurrentValues(newValue);
      if (onChange) {
        onChange(newValue, data);
      }
    },
    [onChange],
  );

  const handleBlur = useCallback(
    (newValue: [number, number], data: Record<string, string>) => {
      if (onBlur) {
        onBlur(newValue, data);
      }
      setDragging(false);
    },
    [onBlur],
  );

  const handleMouseMove = useCallback(
    (element: HTMLElement, clientX: number, handle: "start" | "end") => {
      const rect = element.getBoundingClientRect();
      const value = getValueFromPosition(clientX, rect, total);
      const newValues: [number, number] = [...valuesRef.current];

      if (handle === "start") {
        newValues[0] = Math.min(value, valuesRef.current[1]);
      } else {
        newValues[1] = Math.max(value, valuesRef.current[0]);
      }

      handleChange(newValues, data);

      const onMouseMove = (event: MouseEvent) => {
        const value = getValueFromPosition(event.clientX, rect, total);
        const updatedValues: [number, number] = [...valuesRef.current];

        if (handle === "start") {
          updatedValues[0] = Math.min(value, updatedValues[1]);
        } else {
          updatedValues[1] = Math.max(value, updatedValues[0]);
        }

        handleChange(updatedValues, data);
      };

      document.addEventListener("mousemove", onMouseMove);

      onGlobalMouseUp(() => {
        handleBlur(valuesRef.current, data);
        document.removeEventListener("mousemove", onMouseMove);
      });
    },
    [total, data, handleChange, handleBlur],
  );

  const handleTouchMove = useCallback(
    (element: HTMLElement, clientX: number, handle: "start" | "end") => {
      const rect = element.getBoundingClientRect();
      const value = getValueFromPosition(clientX, rect, total);
      const newValues: [number, number] = [...valuesRef.current];

      if (handle === "start") {
        newValues[0] = Math.min(value, valuesRef.current[1]);
      } else {
        newValues[1] = Math.max(value, valuesRef.current[0]);
      }

      handleChange(newValues, data);

      const onTouchMove = (event: TouchEvent) => {
        const value = getValueFromPosition(
          event.touches[0].clientX,
          rect,
          total,
        );
        const updatedValues: [number, number] = [...valuesRef.current]; // Create new array each time

        if (handle === "start") {
          updatedValues[0] = Math.min(value, updatedValues[1]);
        } else {
          updatedValues[1] = Math.max(value, updatedValues[0]);
        }

        handleChange(updatedValues, data);
      };

      document.addEventListener("touchmove", onTouchMove);

      onGlobalMouseUp(() => {
        handleBlur(valuesRef.current, data);
        document.removeEventListener("touchmove", onTouchMove);
      });
    },
    [total, data, handleChange, handleBlur],
  );

  const handleMouseDown = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      if (event.button !== 0 || !event.currentTarget) return;

      const rect = event.currentTarget.getBoundingClientRect();
      const clickPosition = getValueFromPosition(event.clientX, rect, total);
      const [startPosition, endPosition] = valuesRef.current;

      const handle = getClosestHandle(
        clickPosition,
        startPosition,
        endPosition,
      );

      handleMouseMove(event.currentTarget, event.clientX, handle);
      setDragging(true);
    },
    [total, handleMouseMove],
  );

  const handleTouchStart = useCallback(
    (event: ReactTouchEvent<HTMLDivElement>) => {
      if (!event.currentTarget) return;

      const rect = event.currentTarget.getBoundingClientRect();
      const clickPosition = getValueFromPosition(
        event.touches[0].clientX,
        rect,
        total,
      );
      const [startPosition, endPosition] = valuesRef.current;

      const handle = getClosestHandle(
        clickPosition,
        startPosition,
        endPosition,
      );

      handleTouchMove(event.currentTarget, event.touches[0].clientX, handle);
      setDragging(true);
    },
    [total, handleTouchMove],
  );

  const handleStartKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const newValues = [...currentValues] as [number, number];

      if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
        newValues[0] = Math.max(
          0,
          Math.min(currentValues[0] - 1, currentValues[1]),
        );
        handleChange(newValues, data);
      } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
        newValues[0] = Math.max(
          0,
          Math.min(currentValues[0] + 1, currentValues[1]),
        );
        handleChange(newValues, data);
      }
    },
    [currentValues, data, handleChange],
  );

  const handleEndKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const newValues = [...currentValues] as [number, number];

      if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
        newValues[1] = Math.max(currentValues[0], currentValues[1] - 1);
        handleChange(newValues, data);
      } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
        newValues[1] = Math.min(total, currentValues[1] + 1);
        handleChange(newValues, data);
      }
    },
    [currentValues, total, data, handleChange],
  );

  const startPercent = Math.max(
    Math.min((currentValues[0] * 100) / total, 100),
    0,
  );
  const endPercent = Math.max(
    Math.min((currentValues[1] * 100) / total, 100),
    0,
  );

  return (
    <div
      className={className("slider")}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      data-size={size}
      data-height={height}
      data-variant={variant}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className={className("slider", "track")} />
      <div className={className("slider", "container")}>
        <div
          className={className("slider", "progress")}
          style={{
            left: `${startPercent}%`,
            width: `${endPercent - startPercent}%`,
          }}
        />
        <div
          className={className("slider", "handle")}
          style={{
            left: `${startPercent}%`,
          }}
          onKeyDown={handleStartKeyDown}
          tabIndex={disabled ? -1 : 0}
        />
        <div
          className={className("slider", "handle")}
          style={{
            left: `${endPercent}%`,
          }}
          onKeyDown={handleEndKeyDown}
          tabIndex={disabled ? -1 : 0}
        />
      </div>
    </div>
  );
}
