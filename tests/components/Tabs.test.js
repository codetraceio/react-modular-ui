import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from '../../src/components/Tabs';

describe('Tabs', () => {
  it('should render Tabs', () => {
    const tree = renderer.create(
      <Tabs
        size="32"
        color="primary"
        options={[{
          title: 'title1',
          value: 'value1'
        }, {
          title: 'title2',
          value: 'value2'
        }]}
        value="value1"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
