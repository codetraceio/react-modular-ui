import React from 'react';
import renderer from 'react-test-renderer';
import Textarea from '../../src/components/Textarea';

describe('Textarea', () => {
  it('should render Textarea', () => {
    const tree = renderer.create(
      <Textarea
        size="128"
        color="primary"
        view="flat"
        disabled
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
