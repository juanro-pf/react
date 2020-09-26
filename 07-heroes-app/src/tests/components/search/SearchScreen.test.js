import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Testing SearchScreen', () => {

  const history= {
    push: jest.fn()
  };

  test('default values', () => {
    
    const wrapper= mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route
          path='/search'
          component= { () => <SearchScreen history={ history }/> }
        />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero'); //Con existir bastaría
    
  });

  test('show batman and input with query value', () => {
    
    const wrapper= mount(
      <MemoryRouter initialEntries={['/search?hero=batman']}>
        <Route
          path='/search'
          component= { () => <SearchScreen history={ history }/> }
        />
      </MemoryRouter>
    );

    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper.find('HeroCard').length).toBe(1);
    
  });

  test('default values', () => {
    
    const wrapper= mount(
      <MemoryRouter initialEntries={['/search?hero=blablabla']}>
        <Route
          path='/search'
          component= { () => <SearchScreen history={ history }/> }
        />
      </MemoryRouter>
    );

    expect(wrapper.find('.alert-danger').text().trim()).toBe('No heroes match with blablabla'); //Con existir bastaría
    
  });

  test('call push', () => {
    
    const wrapper= mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route
          path='/search'
          component= { () => <SearchScreen history={ history }/> }
        />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman'
      }
    });

    // wrapper.find('form').prop('onSubmit')({ preventDefault(){} }); //No se por qué no jala
    wrapper.find('button').simulate('click', { preventDefault(){} });

    expect(history.push).toHaveBeenCalledWith('?hero=batman');
    
  });
  
  
});
