import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startLogin, startRegister } from '../../../actions/auth';
import Swal from 'sweetalert2';

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}));

jest.mock('../../../actions/auth', () => ({
  startLogin: jest.fn(),
  startRegister: jest.fn()
}));

const middlewares= [thunk];
const mockStore= configureStore( middlewares );

const initState= {};
const store= mockStore(initState);
store.dispatch= jest.fn();

const wrapper= mount(
  <Provider store= {store}>
    <LoginScreen />
  </Provider>
);

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing LoginScreen', () => {
  
  test('should match snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should call dispach(login())', () => {
    
    wrapper.find('input[name="lEmail"]').simulate('change', {
      target: {
        name: 'lEmail',
        value: 'juan@gmail.com'
      }
    });

    wrapper.find('input[name="lPassword"]').simulate('change', {
      target: {
        name: 'lPassword',
        value: '123456'
      }
    });

    wrapper.find('form').at(0).prop('onSubmit')({
      preventDefault(){}
    });

    expect(startLogin).toHaveBeenCalledWith("juan@gmail.com", "123456");
  });

  test('should fail register if passwords dont match', () => {
    
    wrapper.find('input[name="rPassword"]').simulate('change', {
      target: {
        name: 'rPassword',
        value: '123456'
      }
    });

    wrapper.find('input[name="rPassword2"]').simulate('change', {
      target: {
        name: 'rPassword2',
        value: '1234567'
      }
    });

    wrapper.find('form').at(1).prop('onSubmit')({
      preventDefault(){}
    });

    expect(startRegister).not.toHaveBeenCalled();
    expect(Swal.fire).toHaveBeenCalledWith('Error', 'Passwords must match', 'error');

  });
  
  test('should call register', () => {
    
    wrapper.find('input[name="rPassword"]').simulate('change', {
      target: {
        name: 'rPassword',
        value: '123456'
      }
    });

    wrapper.find('input[name="rPassword2"]').simulate('change', {
      target: {
        name: 'rPassword2',
        value: '123456'
      }
    });

    wrapper.find('form').at(1).prop('onSubmit')({
      preventDefault(){}
    });

    expect(startRegister).toHaveBeenCalled();
    expect(Swal.fire).not.toHaveBeenCalled();

  });

});
