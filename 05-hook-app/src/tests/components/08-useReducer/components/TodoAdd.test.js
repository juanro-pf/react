import React from 'react';

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../../components/08-useReducer/components/TodoAdd';

describe('Testing TodoAdd', () => {

    const handleAddTodo= jest.fn();

    const wrapper= shallow(
        <TodoAdd
        handleAddTodo= {handleAddTodo}
        />
    );
   
    test('Snapshot', () => {
        expect(wrapper).toMatchSnapshot(); 
    });

    test('do not call addtodo', () => {
        
        const formSubmit= wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect(handleAddTodo).not.toHaveBeenCalled();

    });
    
    test('call addtodo', () => {
       
        const value= 'React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit= wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect(handleAddTodo).toHaveBeenCalledWith({
            desc: value,
            done: false,
            id: expect.any(Number)
        });

        //Por el reset
        expect(wrapper.find('input').prop('value')).toBe('');

    });
    
    
});
