import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from '../../routers/PrivateRoute';

import '@testing-library/jest-dom';

describe('Testing PrivateRoute', () => {

  const props= {
    location: {
      pathname: '/search',
      search: '?hero=batman'
    }
  };

  Storage.prototype.setItem= jest.fn();
  
  test('show if is authenticated and save in localStorage', () => {
    
    const wrapper= mount(
      // <MemoryRouter> Utilizar para hacer pruebas de rutas, links,etc (Componentes que deben estar dentro de un router)
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated= { true }
          component= { () => <span>Ehhh!</span> }
          { ...props }
        />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.find('span').text().trim()).toBe('Ehhh!');
    expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', `${props.location.pathname}${props.location.search}`);

  });
  
  test('block component if not authenticated', () => {
    
    const wrapper= mount(
      // <MemoryRouter> Utilizar para hacer pruebas de rutas, links,etc (Componentes que deben estar dentro de un router)
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated= { false }
          component= { () => <span>Ehhh!</span> }
          { ...props }
        />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(false);
    expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', `${props.location.pathname}${props.location.search}`);

  });
  

});
