import { BaseSyntheticEvent, useCallback } from "react";

export function useEvent<T extends BaseSyntheticEvent<HTMLElement>>(
  callback: (value: string, event: T) => void
) {
  return useCallback((event: T) => {
    if (typeof callback === "function") {
      callback(event.currentTarget.value, event);
    }
  }, [callback]);
}
