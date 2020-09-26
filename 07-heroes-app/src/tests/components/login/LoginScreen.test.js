import React from 'react';

import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Testing LoginScreen', () => {

  const historyMock= {
    replace: jest.fn()
  };

  const contextValue= {
    dispatch: jest.fn()
  };

  const wrapper= mount(
    <AuthContext.Provider value={ contextValue }>
      <LoginScreen history={ historyMock }/>
    </AuthContext.Provider>
  );

  test('Snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();

  });

  test('dispatch and navigation', () => {
    
    // Storage.prototype.getItem= '/';

    wrapper.find('button').simulate('click');

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: 'Juan Ro'
      }
    });

    expect(historyMock.replace).toHaveBeenCalledWith('/');

    localStorage.setItem('lastPath', '/dc');

    wrapper.find('button').simulate('click');

    expect(historyMock.replace).toHaveBeenCalledWith('/dc');

  });  

});
