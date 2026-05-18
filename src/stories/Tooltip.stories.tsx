import React from "react";

import UiTooltip, { TooltipProps } from "../components/Tooltip";
import "../../styles/src/default/tooltip.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Tooltip",
  component: UiTooltip,
  args: {
    title: "Helpful hint",
    prefer: "top",
  },
  argTypes: {
    title: { control: { type: "text" } },
    prefer: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "select" },
    },
  },
  decorators: [ThemeDecorator],
};

export const Tooltip = (props: TooltipProps) => {
  return (
    <div
      style={{
        padding: "120px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <UiTooltip {...props}>
        <span
          style={{
            padding: "8px 16px",
            border: "1px solid #e4e4e7",
            borderRadius: "8px",
            cursor: "pointer",
            background: "#ffffff",
          }}
        >
          Hover me
        </span>
      </UiTooltip>
    </div>
  );
};
