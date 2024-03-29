import React, { PropsWithChildren, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { updateTooltip } from "../utils/updateTooltip";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface TooltipProps {
  title: string | JSX.Element;
  prefer?: string;
  theme?: string;
}

export default function Tooltip({
  title,
  prefer,
  theme,
  children,
  ...props
}: PropsWithChildren<TooltipProps>) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const themeContext = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    updateTooltip(wrapperRef.current, tooltipRef.current, prefer);
  }, [open, prefer]);

  const handleUpdate = useCallback(() => {
    updateTooltip(wrapperRef.current, tooltipRef.current, prefer);
  }, [prefer]);

  useEffect(() => {
    window.addEventListener("scroll", handleUpdate, true);
    window.addEventListener("resize", handleUpdate, true);
    return () => {
      window.removeEventListener("scroll", handleUpdate, true);
      window.removeEventListener("resize", handleUpdate, true);
    };
  }, [handleUpdate]);

  const handleOver = useCallback(() => {
    setOpen(true);
  }, []);

  const handleOut = useCallback(() => {
    setOpen(false);
  }, []);

  const tooltipElement = useMemo(() => {
    return (
      <div className={className("tooltip")} data-theme={theme ?? themeContext} ref={tooltipRef}>
        {title}
      </div>
    );
  }, [title, theme, themeContext]);

  const portalElement = useMemo(() => {
    if (!open) {
      return;
    }
    return createPortal(tooltipElement, document.body);
  }, [tooltipElement, open]);

  return (
    <span
      onMouseOver={handleOver}
      onMouseOut={handleOut}
      ref={wrapperRef}
      {...props}
    >
      {children}
      {portalElement}
    </span>
  );
}
