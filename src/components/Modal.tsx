import React, { PropsWithChildren, useCallback, useContext, useMemo } from "react";
import { createPortal } from "react-dom";
import { getConfig } from "../services/configService";
import { className } from "../utils/className";
import { ThemeContext } from "./ThemeContext";

export interface ModalProps {
  show?: boolean;
  name?: string;

  onClose?: () => void;
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  const { onClose, children } = props;

  const theme = useContext(ThemeContext);

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
      <div className={className("modal")} data-theme={theme} onClick={handleClose}>
        <div className={className("modal", "content")} onClick={handleClickInside}>
          {children}
        </div>
      </div>
    );
  }, [children]);

  if (!props.show || getConfig().server) {
    return null;
  }

  return createPortal(modalElement, document.body);
}
