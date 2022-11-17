import React from "react";
import { ComponentMeta } from "@storybook/react";

import UiIcon, { IconProps } from "../components/Icon";
import "../../styles/src/default/icon.scss";
import { ThemeDecorator } from "./ThemeDecorator";

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
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
  decorators: [ThemeDecorator],
};

export const Icon = (props: IconProps) => {
  return <UiIcon {...props} />
};
