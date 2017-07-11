import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Pill from '../../src/components/Pill';

describe('index', () => {
  it('should render Pill', () => {
    const tree = renderer.create(
      <Pill
        size="32"
        type="primary"
      >
        Something
      </Pill>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
