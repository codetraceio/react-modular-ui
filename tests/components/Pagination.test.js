import * as React from "react";
import * as renderer from "react-test-renderer";

import Pagination from "../../src/components/Pagination";

describe("Pagination", () => {
  it("should render Pagination", () => {
    const tree = renderer.create(
      <Pagination
        size="32"
        color="primary"
        count="100"
        limit="10"
        offset="20"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
