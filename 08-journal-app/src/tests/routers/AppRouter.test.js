import '@testing-library/jest-dom';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { login } from '../../actions/auth';
import { AppRouter } from '../../routers/AppRouter';
import { act } from 'react-dom/test-utils';
import { firebase } from '../../firebase/firebaseConfig';

jest.mock('../../actions/auth', () => ({
  login: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState= {
  auth: {},
  ui: {
    loading: false,
    msgError: null
  },
  notes: {
    notes: [],
    active: null
  }
};

let store= mockStore(initState);
store.dispatch= jest.fn();

describe('Testing AppRouter', () => {
  
  test('should do login if authenticated', async () => {

    let user;

    await act(async () => {

      const userCred= await firebase.auth().signInWithEmailAndPassword('jro@test.com', 'jro123');
      user= userCred.user;

      const wrapper= mount(
        <Provider store= { store }>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>
      );
  
    });
    
    expect(login).toHaveBeenCalled();

  });
  
});