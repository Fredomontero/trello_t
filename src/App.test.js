import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';

test('renders learn react link', () => {
  const wrapper = shallow(<App/>);
  const appComponent = wrapper.find('#app-container');
  expect(appComponent.length).toBe(1);
});
