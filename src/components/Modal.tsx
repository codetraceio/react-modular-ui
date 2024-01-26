import React, { HTMLAttributes, PropsWithChildren, useCallback, useContext, useMemo } from "react";
import { createPortal } from "react-dom";
import configService from "../services/configService";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface ModalProps {
  show?: boolean;
  theme?: string;

  onClose?: () => void;
}

export default function Modal({
  show,
  theme,
  children,
  onClose,
  ...props
}: PropsWithChildren<ModalProps & HTMLAttributes<HTMLDivElement>>) {

  const themeContext = useContext(ThemeContext);

  const handleClose = useCallback(() => {
    if (typeof onClose === "function") {
      onClose();
    }
  }, [onClose]);

  const handleClickInside = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const modalElement = useMemo(() => {
    return (
      <div
        className={className("modal")}
        data-theme={theme ?? themeContext}
        onClick={handleClose}
        {...props}
      >
        <div className={className("modal", "content")} onClick={handleClickInside}>
          {children}
        </div>
      </div>
    );
  }, [props, children, theme, themeContext, handleClose]);

  if (!show || configService.getConfig().server) {
    return null;
  }

  return createPortal(modalElement, document.body);
}
