import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders learn react link', () => {
  const wrapper = shallow(<App/>);
  const appComponent = wrapper.find('#app-container');
  expect(appComponent.length).toBe(1);
});