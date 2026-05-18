import React, { useState } from "react";

import UiDropdown, { DropdownProps } from "../components/Dropdown";
import UiButton from "../components/Button";
import "../../styles/src/default/dropdown.scss";
import "../../styles/src/default/button.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Dropdown",
  component: UiDropdown,
  args: {
    open: true,
    placement: "bottom",
  },
  argTypes: {
    open: { control: { type: "boolean" } },
    placement: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "select" },
    },
  },
  decorators: [ThemeDecorator],
};

export const Dropdown = (props: Omit<DropdownProps, "content">) => {
  const [open, setOpen] = useState(props.open ?? true);

  return (
    <div
      style={{
        padding: "160px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <UiDropdown
        {...props}
        open={open}
        onClose={() => setOpen(false)}
        content={
          <div style={{ padding: "8px", minWidth: "220px" }}>
            <DropdownItem label="Profile" />
            <DropdownItem label="Settings" />
            <DropdownItem label="Keyboard shortcuts" />
            <div
              style={{
                height: "1px",
                background: "#e4e4e7",
                margin: "4px 0",
              }}
            />
            <DropdownItem label="Sign out" />
          </div>
        }
      >
        <UiButton onClick={() => setOpen(!open)}>
          {open ? "Close menu" : "Open menu"}
        </UiButton>
      </UiDropdown>
    </div>
  );
};

function DropdownItem({ label }: { label: string }) {
  return (
    <div
      style={{
        padding: "8px 12px",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "14px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#f4f4f5")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      {label}
    </div>
  );
}
