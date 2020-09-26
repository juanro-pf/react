import '@testing-library/jest-dom';
import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Testing authReducer', () => {
  
  test('should return object with uid 123 and displayName Juan Ro', () => {
    
    const action= {
      type: types.login,
      payload: {
        uid: '123',
        displayName: 'Juan Ro'
      }
    };

    const state= authReducer( {}, action );

    expect(state).toEqual({
      uid: '123',
      name: 'Juan Ro'
    });

  });

  test('should return empty object', () => {
    
    const action= {
      type: types.logout
    };

    const state= authReducer( {}, action );

    expect(state).toEqual({});

  });
  
  test('should return initialState ', () => {
    
    const action= {
      type: 'notExistingType'
    };

    const initialState= {la: 'la'};
    const state= authReducer( initialState, action );

    expect(state).toEqual(initialState);

  }); 

});
