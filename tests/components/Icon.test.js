import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Icon from '../../src/components/Icon';

describe('Icon', () => {
  it('should render Icon', () => {
    const tree = renderer.create(
      <Icon
        size="32"
        width="32"
        height="32"
        color="primary"
        rotate="180"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
