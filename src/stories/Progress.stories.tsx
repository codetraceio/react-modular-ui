import React from "react";

import UiProgress, { ProgressProps } from "../components/Progress";
import "../../styles/src/default/progress.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Progress",
  component: UiProgress,
  args: {
    size: 8,
    color: "primary",
    value: 65,
  },
  argTypes: {
    size: { options: [4, 8, 16], control: { type: "select" } },
    color: {
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "select" },
    },
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  decorators: [ThemeDecorator],
};

export const Progress = (props: ProgressProps) => {
  return (
    <div style={{ padding: "24px", maxWidth: "480px" }}>
      <UiProgress {...props} />
    </div>
  );
};
