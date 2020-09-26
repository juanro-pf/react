import '@testing-library/jest-dom';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Tsting authReducer', () => {
  
  test('default state', () => {
    const state= authReducer( {name: 'Juan Ro'}, {});

    expect(state).toEqual({name: 'Juan Ro'});
  });
  
  test('logged true and put name', () => {
    const state= authReducer( {logged: false}, {
      type: types.login,
      payload: {
        name: 'Juan Ro'
      }
    });

    expect(state).toEqual({name: 'Juan Ro', logged: true});
  });

  test('delete name and logged false', () => {
    const state= authReducer( {}, {
      type: types.logout
    });

    expect(state).toEqual({logged: false});
  });

});
