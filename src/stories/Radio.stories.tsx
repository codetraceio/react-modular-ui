import React from "react";

import UiRadio, { RadioProps } from "../components/Radio";
import "../../styles/src/default/radio.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Radio",
  component: UiRadio,
  argTypes: {
    size: {
      options: [16, 24, 32],
      control: { type: "select" },
    },
    color: {
      defaultValue: "primary",
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "select" },
    },
    variant: {
      defaultValue: "default",
      options: ["default", "outline"],
      control: { type: "select" },
    },
    disabled: {
      defaultValue: false,
      control: { type: "boolean" },
    },
    children: {
      defaultValue: "Radio",
      control: { type: "text" },
    },
  },
  decorators: [ThemeDecorator],
};

export const Radio = (props: RadioProps) => {
  return <UiRadio {...props} />
};
