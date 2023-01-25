import { useCallback } from "react";

export function useEvent<T>(
  callback: (value: string, event: T) => void
) {
  if (typeof callback === "function") {
    return useCallback((event: T) => {
      callback((event as any).currentTarget.value, event);
    }, [callback]);
  }
}
