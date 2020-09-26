import '@testing-library/jest-dom';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState= {
  auth: {},
  ui: {
    loading: false,
    msgError: null
  }
};

let store= mockStore(initState);
store.dispatch= jest.fn();

beforeEach( () => {
  store= mockStore(initState);
  jest.clearAllMocks();
});

describe('testing LoginScreen', () => {
  
  const wrapper= mount(
    <Provider store= { store }>
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>
    </Provider>
  );

  test('should match snapshot', () => {  

    expect(wrapper).toMatchSnapshot();

  });

  test('should do startLoginScreen', () => {
    
    wrapper.find('.google-btn').prop('onClick')();

    expect( startGoogleLogin ).toHaveBeenCalled();

  });
  
  test('should do startLogin with default values', () => {
    
    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    });

    expect( startLoginEmailPassword ).toHaveBeenCalledWith('jro@gmail.com', '123456');

  });
  
});
