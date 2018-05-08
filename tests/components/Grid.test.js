import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Grid from '../../src/components/Grid';

describe('Grid', () => {
  it('should render Grid', () => {
    const tree = renderer.create(
      <Grid
        columns="3"
        space="16"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
