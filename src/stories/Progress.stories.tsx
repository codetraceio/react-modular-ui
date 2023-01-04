import React from "react";

import UiProgress, { ProgressProps } from "../components/Progress";
import "../../styles/src/default/progress.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Progress",
  component: UiProgress,
  argTypes: {
    size: {
      options: [4, 8, 16],
      control: { type: "select" },
      defaultValue: 4,
    },
    color: {
      defaultValue: "primary",
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "select" },
    },
    value: {
      defaultValue: 50,
      control: { type: "number" },
    },
  },
  decorators: [ThemeDecorator],
};

export const Progress = (props: ProgressProps) => {
  return <UiProgress {...props} />
};
