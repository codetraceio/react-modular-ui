import "raf/polyfill";

import * as React from "react";
import * as renderer from "react-test-renderer";

import TypeaheadInput from "../../src/components/TypeaheadInput";

describe("TypeaheadInput", () => {
  it("should render TypeaheadInput", () => {
    const tree = renderer.create(
      <TypeaheadInput
        placeholder="Test"
        options={["a", "b", "c", "d"]}
        value="a"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
