import '@testing-library/jest-dom';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';

jest.mock('../../../actions/notes', () => ({
  activeNote: jest.fn()
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
    active: {
      id: 1234,
      title: 'hola',
      body: 'mudo',
      date: 0
    }
  }
};

let store= mockStore(initState);
store.dispatch= jest.fn();

const wrapper= mount(
  <Provider store= {store}>
    <NoteScreen />
  </Provider>
);

describe('Testing NoteScreen', () => {
  
  test('should match snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();

  });

  test('should dispatch activeNote', () => {
    
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'Woliii'
      }
    });

    expect(activeNote).toHaveBeenCalledWith(
      1234,
      {
        body: 'mudo',
        title: 'Woliii',
        id: 1234,
        date: 0
      }
    );

  });
  
});