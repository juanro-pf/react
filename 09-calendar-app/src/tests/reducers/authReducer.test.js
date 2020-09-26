import '@testing-library/jest-dom';
import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

const initState= {
  checking: true
};

describe('Testing authReducer', () => {
  
  test('should return default state', () => {
    
    const state= authReducer(initState, {});

    expect(state).toEqual(initState);
  });

  test('should authenticate user', () => {
    
    const state= authReducer(initState, {
      type: types.authLogin,
      payload: {
        uid: '123',
        name: 'Juanro'
      }
    });

    expect(state).toEqual({
      checking: false,
      uid: '123',
      name: 'Juanro'
    });
  });
  
});
