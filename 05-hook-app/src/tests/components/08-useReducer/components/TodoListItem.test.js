import React from 'react';
import { demoTodos } from '../../../fixtures/demoTodos';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../../components/08-useReducer/components/TodoListItem';

import '@testing-library/jest-dom';

describe('Testing TodoListItem', () => {

    const handleToggle = jest.fn();
    const handleDelete = jest.fn();

    let wrapper= shallow(
        <TodoListItem 
            todo= {demoTodos[0]}
            i= {0}
            handleToggle= { handleToggle }
            handleDelete= { handleDelete }
        />
    );
    
    test('Snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('handleDelete', () => {
        
        wrapper.find('button').simulate('click');

        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );

    });
    
    test('handleToggle', () => {
        
        wrapper.find('p').simulate('click');

        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );

    });

    test('correct <p></p>', () => {
        
        const p= wrapper.find('p');

        expect( p.text().trim()).toBe( `${ 1 }. ${ demoTodos[0].desc }` );

    });

    test('complete class', () => {
        
        const todo= demoTodos[0];
        todo.done= true;

        wrapper= shallow(
            <TodoListItem 
                todo= {todo}
                i= {0}
                handleToggle= { handleToggle }
                handleDelete= { handleDelete }
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    });
     
});
