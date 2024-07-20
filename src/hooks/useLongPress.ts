import { useCallback, useRef } from "react";

type LongPressEvent = React.TouchEvent;

export function useLongPress({
  onLongPress,
  onTouchStart,
  onTouchEnd,
  delay = 300,
}: {
  onLongPress?: (event: LongPressEvent) => void;
  onTouchStart?: (event: LongPressEvent) => void;
  onTouchEnd?: (event: LongPressEvent) => void;
  delay?: number;
}) {
  const timeout = useRef<NodeJS.Timeout>();
  const target = useRef<EventTarget>();

  const start = useCallback(
    (event: LongPressEvent) => {
      document.addEventListener("contextmenu", preventDefault);
      if (event.target) {
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress?.(event);
      }, delay);

      onTouchStart?.(event);
    },
    [onLongPress, onTouchStart, delay],
  );

  const clear = useCallback(
    (event: LongPressEvent) => {
      document.removeEventListener("contextmenu", preventDefault);
      timeout.current && clearTimeout(timeout.current);

      onTouchEnd?.(event);
    },
    [onTouchEnd],
  );

  return {
    onTouchStart: start,
    onTouchEnd: clear,
    onTouchMove: clear,
  };
}

function preventDefault(event: Event) {
  event.preventDefault();
}
