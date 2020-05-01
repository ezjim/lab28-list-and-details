import React from 'react';
import { shallow } from 'enzyme';
import Detail from './Detail';

describe('Detail component', () => {
  it('renders Detail', () => {
    const wrapper = shallow(<Detail image="image" name="first" description="text" />);
    expect(wrapper).toMatchSnapshot();
  });
});
