import React from "react";

import UiGroup from "../components/Group";
import Button from "../components/Button";
import "../../styles/src/default/button.scss";
import { ThemeDecorator } from "./ThemeDecorator";

export default {
  title: "Group",
  component: UiGroup,
  argTypes: {},
  decorators: [ThemeDecorator],
};

export const Group = () => {
  return (
    <UiGroup>
      {null}
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
      {null}
    </UiGroup>
  );
};
