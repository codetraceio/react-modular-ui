import React from "react";

import UiModal, { ModalProps } from "../components/Modal";
import "../../styles/src/default/modal.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Modal",
  component: UiModal,
  argTypes: {
    show: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    color: {
      defaultValue: "primary",
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "select" },
    },
    children: {
      defaultValue: "Modal",
      control: { type: "text" },
    },
  },
  decorators: [ThemeDecorator],
};

export const Modal = (props: ModalProps) => {
  return <UiModal {...props} />;
};
