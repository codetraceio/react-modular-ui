import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../../src/components/Form';

describe('Form', () => {
  it('should render Form', () => {
    const tree = renderer.create(
      <Form>Something</Form>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
