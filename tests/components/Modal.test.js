import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Modal from '../../src/components/Modal';

describe('Modal', () => {
  it('should render Modal', () => {
    const tree = renderer.create(
      <Modal>Something</Modal>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
