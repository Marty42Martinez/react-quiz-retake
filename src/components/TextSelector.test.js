import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector component test', () => {
  it('renders a TextSelector', () => {
    const handleChange = jest.fn();
    const wrapper = shallow(<TextSelector name='headerText' text='Hello Dev' handleChange={handleChange} />);

    expect(wrapper).toMatchSnapshot();
  });
});
