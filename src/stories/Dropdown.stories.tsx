import React, { useState } from "react";

import UiDropdown, { DropdownProps } from "../components/Dropdown";
import "../../styles/src/default/dropdown.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Dropdown",
  component: UiDropdown,
  argTypes: {
    open: {
      defaultValue: true,
      control: { type: "boolean" },
    },
    content: {
      control: { type: "text" },
    },
    placement: {
      control: { type: "select" },
      options: ["left", "right", "top", "bottom"],
    },
  },
  decorators: [ThemeDecorator],
};

export const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = useState(props.open || false);

  return (
    <div style={{ padding: "200px", display: "flex", justifyContent: "center" }}>
      <UiDropdown
        {...props}
        open={open}
        onClose={() => setOpen(false)}
        content={
          props.content || (
            <div style={{ padding: "16px", minWidth: "200px" }}>
              <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
                Dropdown Content
              </div>
              <div style={{ marginBottom: "8px" }}>
                This is a customizable dropdown that can contain any React content.
              </div>
              <button onClick={() => setOpen(false)}>Close</button>
            </div>
          )
        }
      >
        <button onClick={() => setOpen(!open)}>
          {open ? "Close Dropdown" : "Open Dropdown"}
        </button>
      </UiDropdown>
    </div>
  );
};

