import React from 'react';
import renderer from 'react-test-renderer';
import Radio from '../../src/components/Radio';

describe('Radio', () => {
  it('should render Radio', () => {
    const tree = renderer.create(
      <Radio
        size="32"
        view="flat"
        color="primary"
        disabled
      >Something</Radio>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});