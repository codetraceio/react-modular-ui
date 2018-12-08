import "raf/polyfill";

import * as React from "react";
import * as renderer from "react-test-renderer";

import Select from "../../src/components/Select";

describe("Select", () => {
  it("should render Select", () => {
    const tree = renderer.create(
      <Select
        placeholder="Test"
        options={[{
          title: "title1",
          value: "value1"
        }, {
          title: "title2",
          value: "value2"
        }]}
        value="value1"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
