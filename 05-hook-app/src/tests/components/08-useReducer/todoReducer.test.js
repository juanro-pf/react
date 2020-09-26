import { demoTodos } from '../../fixtures/demoTodos';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';

import '@testing-library/jest-dom';

describe('Testing todoReducer', () => {
    
    test('default', () => {
        
        const state= todoReducer( demoTodos, {} );

        expect(state).toEqual(demoTodos);

    });

    test('add', () => {

        const newTodo= {
            id: 3,
            desc: 'Node',
            done: false
        };
       
        const state= todoReducer( demoTodos, {
            type: 'add',
            payload: newTodo
        });

        expect(state).toEqual([...demoTodos, newTodo]);
        
    });   
    
    test('delete', () => {
        
        const state= todoReducer( demoTodos, {
            type: 'delete',
            payload: 1
        });

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);

    });
    
    test('toggle', () => {
        
        const state= todoReducer( demoTodos, {
            type: 'toggle',
            payload: 1
        });

        const [ one, two ]= state;

        expect(one.done).toBe(true);
        expect(two).toEqual(demoTodos[1]);

    });

});
