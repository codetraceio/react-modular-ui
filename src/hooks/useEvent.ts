import { SyntheticEvent, useCallback } from "react";

export function useEvent<
  T extends SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>,
>(
  callback: (value: string, event: T, data: Record<string, string>) => void,
  data: Record<string, string>,
) {
  return useCallback(
    (event: T) => {
      if (typeof callback === "function") {
        callback(event.currentTarget.value, event, data);
      }
    },
    [data, callback],
  );
}
