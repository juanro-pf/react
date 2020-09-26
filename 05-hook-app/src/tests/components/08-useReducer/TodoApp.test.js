import React from 'react';
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('Testing TodoApp', () => {
    
    const wrapper= shallow(<TodoApp />);

    Storage.prototype.setItem= jest.fn(() => {});

    test('Snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });
    
    test('add todo', () => {
        
        const wrapper= mount( <TodoApp /> ); //usarlo para probar toda la app

        act( () => {

            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );

        });

        expect(wrapper.find('h1').text().trim()).toBe('Todo App (2)');

        expect(localStorage.setItem).toHaveBeenCalledTimes(2);

    });
    
    test('delete todo', () => {
       
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );

        expect(wrapper.find('h1').text().trim()).toBe('Todo App (0)');
        
    });
    

});
