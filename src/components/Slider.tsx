import React, {
  useCallback,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
  KeyboardEvent,
} from "react";
import { className } from "../utils/className";

export interface SliderProps {
  value: number;
  total: number;
  size?: number;
  onChange(value: number): void;
  onBlur?(value: number): void;
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
  onChange: (value: number) => void,
  onBlur?: (value: number) => void,
) {
  const rect = element.getBoundingClientRect();
  const positionLeft = clientX - rect.left;
  const width = rect.width;
  const percent = positionLeft / width;

  const value = Math.round(total * percent);

  onChange(value);

  const onMouseMove = (event: MouseEvent) => {
    const positionLeft = event.clientX - rect.left;
    const width = rect.width;
    const percent = Math.min(1, Math.max(0, positionLeft / width));

    const value = Math.round(total * percent);

    onChange(value);
  };

  document.addEventListener("mousemove", onMouseMove);

  onGlobalMouseUp(() => {
    if (onBlur) {
      onBlur(value);
    }
    document.removeEventListener("mousemove", onMouseMove);
  });
}

function handleTouchMove(
  element: HTMLElement,
  clientX: number,
  total: number,
  onChange: (value: number) => void,
) {
  const rect = element.getBoundingClientRect();
  const positionLeft = clientX - rect.left;
  const width = rect.width;
  const percent = positionLeft / width;

  const value = Math.round(total * percent);

  onChange(value);

  const onTouchMove = (event: TouchEvent) => {
    const positionLeft = event.touches[0].clientX - rect.left;
    const width = rect.width;
    const percent = Math.min(1, Math.max(0, positionLeft / width));

    const value = Math.round(total * percent);

    onChange(value);
  };

  document.addEventListener("touchmove", onTouchMove);

  onGlobalMouseUp(() => {
    document.removeEventListener("touchmove", onTouchMove);
  });
}

export default function Slider({
  value,
  total,
  size,
  height,
  onChange,
  onBlur,
}: SliderProps) {
  const handleMouseDown = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      if (event.button !== 0) {
        return;
      }
      const element = event.currentTarget;
      const clientX = event.clientX;
      handleMouseMove(element, clientX, total, onChange, onBlur);
    },
    [total, onChange, onBlur],
  );

  const handleTouchStart = useCallback(
    (event: ReactTouchEvent<HTMLDivElement>) => {
      const element = event.currentTarget;
      const clientX = event.touches[0].clientX;
      handleTouchMove(element, clientX, total, onChange);
    },
    [total, onChange],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
        onChange(Math.max(0, value - 1));
      } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
        onChange(Math.min(total, value + 1));
      }
    },
    [onChange, value, total],
  );

  const percent = Math.max(Math.min((value * 100) / total, 100), 0);

  return (
    <div
      className={className("slider")}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      data-size={size}
      data-height={height}
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
