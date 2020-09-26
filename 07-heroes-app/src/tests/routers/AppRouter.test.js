import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Testing AppRouter', () => {

  const contextValue= {
    dispatch: jest.fn(),
    user: {
      logged: false
    }
  };
  
  test('show login if not authenticated', () => {
    
    const wrapper= mount(
      <AuthContext.Provider value= { contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Login Screen');

  });

  test('should show marvel component if authenticated', () => {

    const contextValue= {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: 'Juan Ro'
      }
    };

    const wrapper= mount(
      <AuthContext.Provider value= { contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find('span').text().trim()).toBe('Juan Ro');

  });
  

});
