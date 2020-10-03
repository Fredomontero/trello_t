import Enzyme, { shallow } from 'enzyme';
import { RegisterPage } from './Register.page';

describe('Register Page Test', () => {
  
  let wrapper = shallow(<RegisterPage/>);
  test('Renders without error', () => {
    const form = wrapper.find('#register-form');
    expect(form.length).toBe(1);
  });

  test('name input exist', () => {
    const nameInput = wrapper.find('#name');
    expect(nameInput.length).toBe(1);
  })

  test('email input exist', () => {
    const emailInput = wrapper.find('#email');
    expect(emailInput.length).toBe(1);
  })

  test('password input exist', () => {
    const passwordInput = wrapper.find('#password');
    expect(passwordInput.length).toBe(1);
  })

  test('confirmation password input exist', () => {
    const PasswordConfirmationInput = wrapper.find('#password-confirmation');
    expect(PasswordConfirmationInput.length).toBe(1);
  })
  
});