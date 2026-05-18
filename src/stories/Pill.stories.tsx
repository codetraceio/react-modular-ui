import React from "react";

import UiPill, { PillProps } from "../components/Pill";
import "../../styles/src/default/pill.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Pill",
  component: UiPill,
  args: {
    size: 24,
    color: "primary",
    children: "Active",
  },
  argTypes: {
    size: { options: [24, 32, 48], control: { type: "select" } },
    color: {
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "select" },
    },
    children: { control: { type: "text" } },
  },
  decorators: [ThemeDecorator],
};

export const Pill = (props: PillProps) => {
  return (
    <div style={{ padding: "24px", display: "flex", gap: "8px" }}>
      <UiPill {...props} />
    </div>
  );
};
