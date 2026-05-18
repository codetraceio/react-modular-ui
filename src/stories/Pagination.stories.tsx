import React, { useState } from "react";

import UiPagination, { PaginationProps } from "../components/Pagination";
import "../../styles/src/default/pagination.scss";
import "../../styles/src/default/icon.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Pagination",
  component: UiPagination,
  args: {
    size: 32,
    color: "primary",
    count: 248,
    limit: 10,
    offset: 30,
  },
  argTypes: {
    size: { options: [24, 32, 48], control: { type: "select" } },
    color: {
      options: ["primary", "secondary", "danger", "success"],
      control: { type: "select" },
    },
    count: { control: { type: "number" } },
    limit: { control: { type: "number" } },
    offset: { control: { type: "number" } },
  },
  decorators: [ThemeDecorator],
};

export const Pagination = (props: PaginationProps) => {
  const [offset, setOffset] = useState(props.offset ?? 0);

  return (
    <div style={{ padding: "24px" }}>
      <UiPagination
        {...props}
        offset={offset}
        onChange={(next) => setOffset(next)}
      />
    </div>
  );
};
