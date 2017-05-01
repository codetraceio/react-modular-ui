import React from 'react';
import renderer from 'react-test-renderer';
import Upload from '../../src/components/Upload';

describe('Upload', () => {
  it('should render Upload with default text', () => {
    const tree = renderer.create(
      <Upload
        text="Something"
        successText="Something else"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render Upload with success text when upload succeed', () => {
    const tree = renderer.create(
      <Upload
        text="Something"
        successText="Something else"
        success
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
