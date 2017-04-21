import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '../../src/components/Checkbox';

describe('Checkbox', () => {
  it('should render Checkbox', () => {
    const tree = renderer.create(
      <Checkbox
        size="32"
        view="flat"
        color="primary"
        disabled
      >Something</Checkbox>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
