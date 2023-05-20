import React, { PropsWithChildren, useCallback, useContext, useMemo } from "react";
import { createPortal } from "react-dom";
import configService from "../services/configService";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface ModalProps {
  show?: boolean;
  name?: string;
  theme?: string;

  onClose?: () => void;
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  const { onClose, children } = props;

  const theme = useContext(ThemeContext);
  const propsTheme = props.theme;

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
      <div className={className("modal")} data-theme={propsTheme ?? theme} onClick={handleClose}>
        <div className={className("modal", "content")} onClick={handleClickInside}>
          {children}
        </div>
      </div>
    );
  }, [children, theme, propsTheme, handleClose]);

  if (!props.show || configService.getConfig().server) {
    return null;
  }

  return createPortal(modalElement, document.body);
}
