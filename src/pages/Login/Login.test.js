import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { LoginPage } from './Login.page';

describe('Login Test Page', () => {
  
  let wrapper = shallow(<LoginPage/>);
  test('Renders without error', () => {
    const form = wrapper.find('#login-form');
    expect(form.length).toBe(1);
  });

  test('email input exist', () => {
    const emailInput = wrapper.find('#email');
    expect(emailInput.length).toBe(1);
  })

  test('password input exist', () => {
    const passwordInput = wrapper.find('#email');
    expect(passwordInput.length).toBe(1);
  })
  
});