import '@testing-library/jest-dom';
import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { types } from '../../../types/types';

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
// No necesito simular el dispatch porque son solo acciones sincronas
// store.dispatch= jest.fn();

// beforeEach( () => {
//   store= mockStore(initState);
// });

describe('testing RegisterScreen', () => {
  
  const wrapper= mount(
    <Provider store= {store}>
      <MemoryRouter>
        <RegisterScreen />
      </MemoryRouter>
    </Provider>
  );

  test('should match snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();

  });

  test('should dispatch action', () => {
    
    const emailField= wrapper.find('input[name="email"]');

    emailField.simulate('change', {
      target: {
        value: '',
        name: 'email'
      }
    });

    wrapper.find('form').simulate('submit', {
      preventDefault(){}
    });

    const actions= store.getActions();
    
    expect(actions[0]).toEqual({
      type: types.uiSetError,
      payload: 'Invalid email'
    });

  });  
  
  test('should show alert box with error', () => {
    
    const initState= {
      auth: {},
      ui: {
        loading: false,
        msgError: 'Incorrect email'
      }
    };
    
    const store= mockStore(initState);

    const wrapper= mount(
      <Provider store= {store}>
        <MemoryRouter>
          <RegisterScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find('.auth__alert-error').exists()).toBe(true);
    expect(wrapper.find('.auth__alert-error').text().trim()).toBe('Incorrect email');

  });
  
});
