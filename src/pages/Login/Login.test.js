import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { LoginPage } from './Login.page';

test('renders without error', () => {
  let wrapper = shallow(<LoginPage/>);
  // console.log(wrapper.debug());
});