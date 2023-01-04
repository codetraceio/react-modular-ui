import React from "react";

import UiPill, { PillProps } from "../components/Pill";
import "../../styles/src/default/pill.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Pill",
  component: UiPill,
  argTypes: {
    size: {
      options: [24, 32, 48],
      control: { type: "select" },
      defaultValue: 24,
    },
    color: {
      defaultValue: "primary",
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "select" },
    },
    children: {
      defaultValue: "Pill",
      control: { type: "text" },
    },
  },
  decorators: [ThemeDecorator],
};

export const Pill = (props: PillProps) => {
  return <UiPill {...props} />
};
