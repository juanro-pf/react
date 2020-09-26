import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { AppRouter } from '../../router/AppRouter';

const middlewares= [thunk];
const mockStore= configureStore( middlewares );

// store.dispatch= jest.fn();

describe('Testing AppRouter', () => {
  
  test('should show loading...', () => {

    const initState= {
      auth: {
        checking: true
      }
    };

    const store= mockStore(initState);
    
    const wrapper= mount(
      <Provider store= {store}>
        <AppRouter />
      </Provider>
    );

    expect(wrapper.find('h1').text().trim()).toBe('Loading...');

  });

  test('should show public route', () => {

    const initState= {
      auth: {
        checking: false,
        uid: null
      }
    };
    
    const store= mockStore(initState);
    
    const wrapper= mount(
      <Provider store= {store}>
        <AppRouter />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.login-container').exists()).toBe(true);

  });

  test('should show private route', () => {

    const initState= {
      ui: {
        modalOpen: false
      },
      calendar: {
        events: []
      },
      auth: {
        checking: false,
        uid: 'abc123',
        name: 'jro'
      }
    };
    
    const store= mockStore(initState);
    
    const wrapper= mount(
      <Provider store= {store}>
        <AppRouter />
      </Provider>
    );

    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.calendar-screen').exists()).toBe(true);

  });
  
});
