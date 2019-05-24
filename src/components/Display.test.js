import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';


describe('Display component', () => {
  it('renders a Display', () => {
    const wrapper = shallow(<Display headerText='hello' footerText='bye' image='img.jpg' />);
    expect(wrapper).toMatchSnapshot();
  });
});
