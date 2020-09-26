import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout, startLogout, startLoginEmailPassword } from '../../actions/auth';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState= {};

let store= mockStore(initState);

beforeEach( () => {
  store= mockStore(initState);
});

describe('Testing usth actions', () => {
  
  test('should do login and logout action', () => {
    
    const uid= 'A123';
    const displayName= 'JuanRo';

    const loginAction= login( uid, displayName );
    const logoutAction= logout();

    expect( loginAction ).toEqual({
      type: types.login,
      payload: {
        uid,
        displayName
      }
    });

    expect( logoutAction ).toEqual({
      type: types.logout
    });

  });

  test('should do startLogout', async () => {
    
    await store.dispatch( startLogout() );

    const actions= store.getActions();
    
    expect(actions[0]).toEqual({ type: types.logout });
    expect(actions[1]).toEqual({ type: types.notesLogoutCleaning });

  });
  
  test('should do startLoginEmailPassword', async () => {

    const email= 'jro@test.com';
    const pass= 'jro123';
    
    await store.dispatch( startLoginEmailPassword(email, pass) );
    const actions= store.getActions();

    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: 'lJkryrIYR7YxtRATYhXeNoyA9ST2',
        displayName: null
      }
    });

  });
  
});
