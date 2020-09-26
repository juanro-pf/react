import React from 'react';
import { demoTodos } from '../../../fixtures/demoTodos';
import { shallow } from 'enzyme';
import { TodoList } from '../../../../components/08-useReducer/components/TodoList';

import '@testing-library/jest-dom';

describe('Testing TodoList', () => {
    
const handleToggle= jest.fn();
const handleDelete= jest.fn();

    const wrapper= shallow(
        <TodoList
        todos= {demoTodos}
        handleToggle= { handleToggle }
        handleDelete= { handleDelete }
        />
    );
    
    test('Snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('2 items', () => {

        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual( expect.any(Function) );

    });
    

});
