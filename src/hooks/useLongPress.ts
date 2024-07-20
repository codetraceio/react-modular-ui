import { useCallback, useRef } from 'react';

interface LongPressOptions {
  shouldPreventDefault?: boolean;
  delay?: number;
}

type LongPressEvent = React.TouchEvent;

export function useLongPress({
  onLongPress,
  onTouchStart,
  onTouchEnd,
  options = { delay: 300, shouldPreventDefault: true },
}: {
  onLongPress?: (event: LongPressEvent) => void;
  onTouchStart?: (event: LongPressEvent) => void;
  onTouchEnd?: (event: LongPressEvent) => void;
  options?: LongPressOptions;
}) {
  const timeout = useRef<NodeJS.Timeout>();
  const target = useRef<EventTarget>();

  const start = useCallback(
    (event: LongPressEvent) => {
      document.addEventListener('contextmenu', preventDefault);
      if (options.shouldPreventDefault && event.target) {
        event.target.addEventListener('touchend', preventDefault, {
          passive: false
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress?.(event);
      }, options.delay);
      
      onTouchStart?.(event);
    },
    [onLongPress, onTouchStart, options.delay, options.shouldPreventDefault]
  );

  const clear = useCallback(
    (event: LongPressEvent) => {
      document.removeEventListener('contextmenu', preventDefault);
      timeout.current && clearTimeout(timeout.current);
      if (options.shouldPreventDefault && target.current) {
        target.current.removeEventListener('touchend', preventDefault);
      }
      
      onTouchEnd?.(event);
    },
    [options.shouldPreventDefault, onTouchEnd]
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