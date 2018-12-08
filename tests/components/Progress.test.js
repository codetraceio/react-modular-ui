import * as React from "react";
import * as renderer from "react-test-renderer";

import Progress from "../../src/components/Progress";

describe("Progress", () => {
  it("should render Progress", () => {
    const tree = renderer.create(
      <Progress
        size="4"
        color="primary"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
