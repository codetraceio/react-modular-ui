import * as React from "react";
import * as renderer from "react-test-renderer";

import Toggle from "../../src/components/Toggle";

describe("Toggle", () => {
  it("should render Toggle", () => {
    const tree = renderer.create(
      <Toggle
        size="32"
        view="flat"
        color="primary"
        disabled
      >Something</Toggle>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
