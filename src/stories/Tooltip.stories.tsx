import React from "react";

import UiTooltip, { TooltipProps } from "../components/Tooltip";
import "../../styles/src/default/tooltip.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Tooltip",
  component: UiTooltip,
  argTypes: {
    title: {
      defaultValue: "Title",
      control: { type: "text" },
    },
    children: {
      defaultValue: "Tooltip",
      control: { type: "text" },
    },
  },
  decorators: [ThemeDecorator],
};

export const Tooltip = (props: TooltipProps) => {
  return (
    <div style={{padding: "96px"}}>
      <UiTooltip {...props} />
    </div>
  );
};
