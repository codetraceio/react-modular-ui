import { SyntheticEvent, useCallback } from "react";

export function useEvent<T extends SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>>(
  callback: (value: string, event: T) => void
) {
  return useCallback((event: T) => {
    if (typeof callback === "function") {
      callback(event.currentTarget.value, event);
    }
  }, [callback]);
}
