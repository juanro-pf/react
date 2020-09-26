import '@testing-library/jest-dom';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState= {};

let store= mockStore(initState);
store.dispatch= jest.fn();

const note= {
  id: 0,
  date: 0,
  title: 'title',
  body: 'body',
  url: 'https://pic.com/pic.jpg'
};

const wrapper= mount(
  <Provider store= {store}>
    <JournalEntry {...note}/>
  </Provider>
);

describe('Testing JournalEntry', () => {
  
  test('should match snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();

  });

  test('should active the note', () => {
    
    wrapper.find('.journal__entry').simulate('click');

    expect(store.dispatch).toHaveBeenCalledWith(
      activeNote(note.id, {...note})
    );

  });  
  
});