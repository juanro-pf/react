import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { CalendarModal } from '../../../components/calendar/CalendarModal';
import moment from 'moment';
import { eventStartUpdate, eventClearActiveEvent, eventStartAddNew } from '../../../actions/events';
import { act } from '@testing-library/react';
import Swal from 'sweetalert2';

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
}));

jest.mock('../../../actions/events', () => ({
  eventStartUpdate: jest.fn(),
  eventClearActiveEvent: jest.fn(),
  eventStartAddNew: jest.fn()
}));

const now= moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlusOne= now.clone().add(1, 'hours');

const initEvent= {
  title: 'Aasd',
  notes: 'Basd',
  start: now.toDate(),
  end: nowPlusOne.toDate()
}

const middlewares= [thunk];
const mockStore= configureStore( middlewares );

const initState= {
  ui: {
    modalOpen: true
  },
  calendar: {
    events: [],
    activeEvent: initEvent
  },
  auth: {
    uid: '123'
  }
};
const store= mockStore(initState);
store.dispatch= jest.fn();

const wrapper= mount(
  <Provider store= {store}>
    <CalendarModal />
  </Provider>
);

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Testing CalendarModal', () => {
  
  test('should show modal', () => {
    expect(wrapper.find('Modal').prop('isOpen')).toBe(true);
  });

  test('should call action update and close modal', () => {
    
    wrapper.find('form').simulate('submit', {
      preventDefault(){} 
    });

    expect( eventStartUpdate ).toHaveBeenCalledWith(initEvent);
    expect( eventClearActiveEvent ).toHaveBeenCalled();

  });
    
  test('should show error if title is missing', () => {
    
    wrapper.find('form').simulate('submit', {
      preventDefault(){} 
    });

    //Acabando la prueba anterior se limpia el formulario

    expect( wrapper.find('input[name="title"]').hasClass('is-invalid') ).toBe(true);

  });
  
  test('should create new event', () => {
    
    const initState= {
      ui: {
        modalOpen: true
      },
      calendar: {
        events: [],
        activeEvent: null
      },
      auth: {
        uid: '123',
        name: 'jrop'
      }
    };
    const store= mockStore(initState);
    store.dispatch= jest.fn();
    
    const wrapper= mount(
      <Provider store= {store}>
        <CalendarModal />
      </Provider>
    );

    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'Hola pruebas'
      }
    });

    wrapper.find('form').simulate('submit', {
      preventDefault(){} 
    });

    expect(eventStartAddNew).toHaveBeenCalledWith({
      end: expect.anything(),
      notes: "",
      start: expect.anything(),
      title: "Hola pruebas"
    });

    expect(eventClearActiveEvent).toHaveBeenCalled();

  });
  
  test('should validate dates', () => {
    
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'Hola pruebas'
      }
    });

    const today= new Date();

    act(() => {
      wrapper.find('DateTimePicker').at(1).prop('onChange')(today);
    });

    wrapper.find('form').simulate('submit', {
      preventDefault(){} 
    });

    expect(Swal.fire).toHaveBeenCalledWith("Error", "End date has to be greater that start date", "error");
  });
  
});
