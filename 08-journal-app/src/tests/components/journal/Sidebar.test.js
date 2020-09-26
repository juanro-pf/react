import '@testing-library/jest-dom';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Sidebar } from '../../../components/journal/Sidebar';
import { Provider } from 'react-redux';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';

jest.mock('../../../actions/auth', () => ({
  startLogout: jest.fn()
}));

jest.mock('../../../actions/notes', () => ({
  startNewNote: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState= {
  auth: {
    uid: 'asdasd',
    name: 'Jro'
  },
  ui: {
    loading: false,
    msgError: null
  },
  notes: {
    notes: [],
    active: null
  }
};

let store= mockStore(initState);
store.dispatch= jest.fn();

describe('Testing Sidebar', () => {
  
  const wrapper= mount(
    <Provider store= {store}>
      <Sidebar />
    </Provider>
  );

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should do startLogout', () => {
    
    wrapper.find('button').simulate('click');
    
    expect(startLogout).toHaveBeenCalled();
  });
  
  test('should do startNewNote', () => {
    
    wrapper.find('.journal__new-entry').simulate('click');

    expect(startNewNote).toHaveBeenCalled();

  });
  
});