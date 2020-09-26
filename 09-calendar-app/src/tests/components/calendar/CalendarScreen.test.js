import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { CalendarScreen } from '../../../components/calendar/CalendarScreen';
import { types } from '../../../types/types';
import { eventSetActive } from '../../../actions/events';

Storage.prototype.setItem= jest.fn();

jest.mock('../../../actions/events', () => ({
  eventSetActive: jest.fn(),
  eventStartLoading: jest.fn()
}));

const middlewares= [thunk];
const mockStore= configureStore( middlewares );

const initState= {
  ui: {
    modalOpen: false
  },
  calendar: {
    events: []
  },
  auth: {
    uid: '123'
  }
};
const store= mockStore(initState);
store.dispatch= jest.fn();

const wrapper= mount(
  <Provider store= {store}>
    <CalendarScreen />
  </Provider>
);

describe('Testing CalendarScreen', () => {
  
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('calendar interactions', () => {
    
    const calendar= wrapper.find('Calendar');

    expect(calendar.prop('startAccessor')).toBe('start');

    calendar.prop('onDoubleClickEvent')();

    expect(store.dispatch).toHaveBeenCalledWith({type: types.uiOpenModal});

    calendar.prop('onSelectEvent')({start: 'Hola'});

    expect(eventSetActive).toHaveBeenCalledWith({start: 'Hola'});

    calendar.prop('onView')('week');

    expect(localStorage.setItem).toHaveBeenCalledWith('lastView', 'week');

  });
    
});
