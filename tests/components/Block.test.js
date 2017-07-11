import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Block from '../../src/components/Block';

describe('Block', () => {
  it('should render Block', () => {
    const tree = renderer.create(
      <Block
        layout="horizontal"
        wrap
        padding="0 16"
        margin={{
          lUp: "48",
          sUp: "48 24",
          xsUp: "48 24 16",
          xsDown: "48 24 16 8"
        }}
        hide={{
          xsUp: false,
          xsDown: true
        }}
        fit
        grow="1"
        shrink="1"
        order="1"
        grid="4"
        align="center"
        justify="center"
        scroll="on"
        spaceHorizontal="8"
        spaceVertical="8"
        height="32"
        width="32"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
