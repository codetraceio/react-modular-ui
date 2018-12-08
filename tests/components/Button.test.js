import * as React from "react";
import * as renderer from "react-test-renderer";

import Button from "../../src/components/Button";

describe("Button", () => {
  it("should render Button", () => {
    const tree = renderer.create(
      <Button
        size="32"
        view="flat"
        color="primary"
        shape="rounded"
        disabled
      >Something</Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
