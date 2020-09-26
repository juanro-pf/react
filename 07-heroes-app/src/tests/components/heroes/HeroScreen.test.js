import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Testing HeroScreen', () => {

  const historyMock= {
    push: jest.fn(),
    goBack: jest.fn(),
    length: 10
  };
  
  test('!hero === true', () => {
    
    const wrapper= mount(
      <MemoryRouter initialEntries={['/hero']}>
        <HeroScreen history={ historyMock } />
      </MemoryRouter>
    );

    expect(wrapper.find('Redirect').exists()).toBe(true);

  });

  test('show hero if parameter exists', () => {
    
    const wrapper= mount(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Route path='/hero/:heroId' component= { HeroScreen } />
      </MemoryRouter>
    );

    expect(wrapper.find('.row').exists()).toBe(true);

  });
    
  test('return to /', () => {
    
    const historyMock= {
      push: jest.fn(),
      goBack: jest.fn(),
      length: 1
    };

    const wrapper= mount(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Route
          path='/hero/:heroId'
          component= { () => <HeroScreen history= {historyMock} /> }
        />
      </MemoryRouter>
    );

    wrapper.find('button').simulate('click');

    expect(historyMock.push).toHaveBeenCalledWith('/');
    expect(historyMock.goBack).not.toHaveBeenCalled();

  });

  test('return to last page', () => {

    const wrapper= mount(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Route
          path='/hero/:heroId'
          component= { () => <HeroScreen history= {historyMock} /> }
        />
      </MemoryRouter>
    );

    wrapper.find('button').simulate('click');

    expect(historyMock.goBack).toHaveBeenCalled();
    expect(historyMock.push).not.toHaveBeenCalled();

  });

  //Esta prueba esta rara
  test('hero doesnt exist', () => {

    const wrapper= mount(
      <MemoryRouter initialEntries={['/hero/asdasd']}>
        <Route
          path='/hero/:heroId'
          component= { () => <HeroScreen history= {historyMock} /> }
        />
      </MemoryRouter>
    );

    expect(wrapper.text()).toBe('');

  });

});
