import React from "react";

import UiGroup from "../components/Group";
import Button from "../components/Button";
import "../../styles/src/default/button.scss";
import "../../styles/src/default/group.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Group",
  component: UiGroup,
  decorators: [ThemeDecorator],
};

export const Group = () => {
  return (
    <div style={{ padding: "24px" }}>
      <UiGroup>
        <Button>Cancel</Button>
        <Button variant="outline">Save draft</Button>
        <Button>Publish</Button>
      </UiGroup>
    </div>
  );
};
