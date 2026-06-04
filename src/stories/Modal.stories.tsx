import React, { useState } from "react";

import UiModal, { ModalProps } from "../components/Modal";
import UiButton from "../components/Button";
import "../../styles/src/default/modal.scss";
import "../../styles/src/default/button.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Modal",
  component: UiModal,
  args: {
    show: true,
  },
  argTypes: {
    show: { control: { type: "boolean" } },
  },
  decorators: [ThemeDecorator],
};

export const Modal = (props: ModalProps) => {
  const [open, setOpen] = useState(props.show ?? true);

  return (
    <div style={{ padding: "32px" }}>
      <UiButton onClick={() => setOpen(true)}>Open modal</UiButton>
      <UiModal {...props} show={open} onClose={() => setOpen(false)}>
        <div style={{ padding: "24px", maxWidth: "420px" }}>
          <h2
            style={{ margin: "0 0 12px 0", fontSize: "18px", fontWeight: 600 }}
          >
            Dialog title
          </h2>
          <p
            style={{ margin: "0 0 20px 0", color: "#52525b", lineHeight: 1.5 }}
          >
            This is a modal dialog. Click outside the content or press the
            button to dismiss it.
          </p>
          <div
            style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}
          >
            <UiButton variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </UiButton>
            <UiButton onClick={() => setOpen(false)}>Confirm</UiButton>
          </div>
        </div>
      </UiModal>
    </div>
  );
};
