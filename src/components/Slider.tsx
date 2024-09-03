import React, {
  useCallback,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
} from "react";
import { className } from "../utils/className";

export interface SliderProps {
  value: number;
  total: number;
  height: number;
  onChange(value: number): void;
  onBlur?(value: number): void;
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

export default function Slider(props: SliderProps) {
  const { total, onChange, onBlur } = props;

  const onMouseDown = useCallback(
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

  const onTouchStart = useCallback(
    (event: ReactTouchEvent<HTMLDivElement>) => {
      const element = event.currentTarget;
      const clientX = event.touches[0].clientX;
      handleTouchMove(element, clientX, total, onChange);
    },
    [total, onChange],
  );

  const percent = Math.max(Math.min((props.value * 100) / props.total, 100), 0);

  return (
    <div
      className={className("slider")}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      tabIndex={0}
      data-height={props.height}
    >
      <div className={className("slider", "container")}>
        <div className={className("slider", "track")} />
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
