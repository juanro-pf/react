import React from 'react';
import '@testing-library/jest-dom';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';

describe('Testing DashboardRoutes', () => {
  
  const contextValue= {
    user: {
      name: 'Juan Ro',
      logged: true
    },
    dispatch: jest.fn()
  };

  test('Snapshot', () => {
    
    const wrapper= mount(
      <AuthContext.Provider value= { contextValue }>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Juan Ro');

  });

});
