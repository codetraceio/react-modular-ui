import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../../src/components/Input';

describe('Input', () => {
  it('should render Input', () => {
    const tree = renderer.create(
      <Input
        size="4"
        color="primary"
        view="flat"
        didabled
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
