import React from "react";
import { ComponentMeta } from "@storybook/react";

import UiIcon, { IconProps } from "../components/Icon";
import "../../styles/src/default/icon.scss";

export default {
  title: "Icon",
  component: UiIcon,
  argTypes: {
    size: {
      options: [32, 48, 56],
      control: { type: "select" },
    },
    color: {
      defaultValue: "primary",
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "select" },
    },
    variant: {
      defaultValue: "contained",
      options: ["contained", "outlined"],
      control: { type: "select" },
    },
    shape: {
      defaultValue: "default",
      options: ["default", "rectangle"],
      control: { type: "select" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    children: {
      defaultValue: "Button",
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof UiIcon>;

export const Icon = (props: IconProps) => {
  return <UiIcon {...props} />
};
