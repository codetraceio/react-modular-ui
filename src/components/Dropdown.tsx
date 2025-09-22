import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { createPortal } from "react-dom";

import { updateDropDown } from "../utils/updateDropDown";
import { className } from "../utils/className";
import clickOutsideService from "../services/clickOutsideService";
import { ThemeContext } from "./ThemeContext";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export interface DropdownProps {
  open: boolean;
  content: React.ReactNode;
  theme?: string;
  onClose?: () => void;
}

export default function Dropdown({
  open,
  content,
  theme,
  onClose,
  children,
  ...props
}: PropsWithChildren<DropdownProps>) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themeContext = useContext(ThemeContext);

  const handleUpdate = useCallback(() => {
    updateDropDown(dropdownRef.current, wrapperRef.current, false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleUpdate, true);
    window.addEventListener("resize", handleUpdate, true);

    return () => {
      window.removeEventListener("scroll", handleUpdate, true);
      window.removeEventListener("resize", handleUpdate, true);
    };
  }, [handleUpdate]);

  useEffect(() => {
    const handleClickOutside = () => {
      if (onClose) {
        onClose();
      }
    };

    const dropdown = dropdownRef.current;
    const wrapper = wrapperRef.current;

    if (open && dropdown && onClose) {
      clickOutsideService.on(dropdown, [wrapper], handleClickOutside);
    }

    return () => {
      clickOutsideService.off(dropdown);
    };
  }, [open, onClose]);

  useIsomorphicLayoutEffect(() => {
    if (open) {
      updateDropDown(dropdownRef.current, wrapperRef.current, false);
    }
  }, [open]);

  const dropdownElement = useMemo(() => {
    return (
      <div
        className={className("dropdown")}
        data-theme={theme ?? themeContext}
        ref={dropdownRef}
      >
        {content}
      </div>
    );
  }, [content, theme, themeContext]);

  const portalElement = useMemo(() => {
    if (!open || !content) {
      return null;
    }
    return createPortal(dropdownElement, document.body);
  }, [dropdownElement, open, content]);

  return (
    <div ref={wrapperRef} {...props}>
      {children}
      {portalElement}
    </div>
  );
}