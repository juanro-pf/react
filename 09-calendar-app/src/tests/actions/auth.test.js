import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startLogin, startRegister, startChecking } from '../../actions/auth';
import { types } from '../../types/types';
import Swal from 'sweetalert2';
import * as fetchModule from '../../helpers/fetch';

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
}));

const middlewares= [thunk];
const mockStore= configureStore( middlewares );

const initState= {};
let store= mockStore(initState);

Storage.prototype.setItem= jest.fn();

let token= '';

describe('Testing auth actions', () => {
  
  beforeEach( () => {
    store= mockStore(initState);
    jest.clearAllMocks();
  });

  test('startLogin correct data', async () => {
    
    await store.dispatch( startLogin('jro@gmail.com', '123456') );

    const actions= store.getActions();
    
    expect(actions[0]).toEqual({
      type: types.authLogin,
      payload: {
        uid: expect.any(String),
        name: expect.any(String)
      }
    });

    expect(localStorage.setItem).toHaveBeenCalledWith("token", expect.any(String));
    expect(localStorage.setItem).toHaveBeenCalledWith("token-init-date", expect.any(Number));

    token= localStorage.setItem.mock.calls[0][1];
    // console.log(token);

  });

  test('startLogin incorrect data', async () => {
    
    await store.dispatch( startLogin('email@gmail.com', '123456') );
    let actions= store.getActions();
    
    expect(actions).toEqual([]);
    expect(Swal.fire).toHaveBeenCalledWith('Error', 'Email is not registered', 'error');

    await store.dispatch( startLogin('jro@gmail.com', '1234567') );
    actions= store.getActions();
    
    expect(Swal.fire).toHaveBeenCalledWith('Error', 'Wrong password', 'error');

  });

  test('startRegister correct data', async () => {

    fetchModule.fetchWithoutToken= jest.fn(() => ({
      json() {
        return {
          ok: true,
          uid: '123',
          name: 'Test',
          token: 'ABC123'
        }
      }
    }));
    
    await store.dispatch( startRegister('test@test.com', 'test', '123456') );

    const actions= store.getActions();

    expect(actions[0]).toEqual({
      type: types.authLogin,
      payload: {
        uid: '123',
        name: 'Test'
      }
    });

    expect(localStorage.setItem).toHaveBeenCalledWith("token", 'ABC123');
    expect(localStorage.setItem).toHaveBeenCalledWith("token-init-date", expect.any(Number));
  });
  
  test('startChecking correct', async () => {
    
    fetchModule.fetchWithToken= jest.fn(() => ({
      json() {
        return {
          ok: true,
          uid: '123',
          name: 'Test',
          token: 'ABC123'
        }
      }
    }));
    
    await store.dispatch( startChecking() );

    const actions= store.getActions();
    
    expect(actions[0]).toEqual({
      type: types.authLogin,
      payload: {
        uid: '123',
        name: 'Test'
      }
    });

    expect(localStorage.setItem).toHaveBeenCalledWith("token", 'ABC123');
    expect(localStorage.setItem).toHaveBeenCalledWith("token-init-date", expect.any(Number));
  });
  
});