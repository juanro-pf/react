import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Navbar } from '../../../components/ui/Navbar';

import '@testing-library/jest-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('Testing  Navbar', () => {

  const historyMock= {
    replace: jest.fn(),
    listen: jest.fn(),
    createHref: jest.fn(),
    location: {}
  };

  const contextValue= {
    user: {
      name: 'Juan Ro',
      logged: true
    },
    dispatch: jest.fn()
  };
  
  const wrapper= mount(
    <MemoryRouter >
      <AuthContext.Provider value= { contextValue }>
        <Router history= { historyMock }>
          <Navbar />
        </Router>
      </AuthContext.Provider>
    </MemoryRouter>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('span').text().trim()).toBe('Juan Ro');

  });
  
  test('button', () => {
    
    wrapper.find('button').simulate('click');
    
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout
    });

    expect(historyMock.replace).toHaveBeenCalledWith('/login');

  });
  

});
