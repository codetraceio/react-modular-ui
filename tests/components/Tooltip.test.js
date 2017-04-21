import React from 'react';
import renderer from 'react-test-renderer';
import Tooltip from '../../src/components/Tooltip';

describe('Tooltip', () => {
  it('should render Tooltip', () => {
    const tree = renderer.create(
      <Tooltip
        title="Help"
      >Something</Tooltip>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
