import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Input from '../../src/components/Input';

describe('Input', () => {
  it('should render Input', () => {
    const tree = renderer.create(
      <Input
        size="4"
        color="primary"
        view="flat"
        disabled
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
