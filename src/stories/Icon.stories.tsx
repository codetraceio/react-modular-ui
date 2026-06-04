import React from "react";

import UiIcon, { IconProps } from "../components/Icon";
import "../../styles/src/default/icon.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Icon",
  component: UiIcon,
  args: {
    icon: "checkbox",
    size: 24,
    rotate: 0,
    color: "primary",
    disabled: false,
  },
  argTypes: {
    icon: {
      options: [
        "checkbox",
        "radio",
        "pagination",
        "dropdown",
        "handle",
        "close",
        "upload",
      ],
      control: { type: "select" },
    },
    size: { options: [16, 24, 32, 48], control: { type: "select" } },
    rotate: { options: [0, 90, 180, 270], control: { type: "select" } },
    color: {
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "select" },
    },
    disabled: { control: { type: "boolean" } },
  },
  decorators: [ThemeDecorator],
};

export const Icon = (props: IconProps) => {
  return (
    <div style={{ padding: "32px" }}>
      <UiIcon {...props} />
    </div>
  );
};
