import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

import '@testing-library/jest-dom';

describe('Testing useCounter', () => {

    test('returning default values', () => {
        
        const { result }= renderHook( () => useCounter() );

        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

    });

    test('returning counter value', () => {

        const numb= 30;
        
        const { result }= renderHook( () => useCounter(numb) );

        expect( result.current.counter ).toBe(numb);

    });

    test('increment', () => {
        
        const { result }= renderHook( () => useCounter(100) );
        const { increment }= result.current;

        act( () => {
            increment();
        });

        const { counter }= result.current;

        expect(counter).toBe(101);

    });

    test('decrement', () => {
        
        const { result }= renderHook( () => useCounter(100) );
        const { decrement }= result.current;

        act( () => {
            decrement();
        });

        const { counter }= result.current;

        expect(counter).toBe(99);

    });

    test('reset', () => {
        
        const { result }= renderHook( () => useCounter(100) );
        const { increment, reset }= result.current;

        act( () => {
            increment();
            reset();
        });

        const { counter }= result.current;

        expect(counter).toBe(100);

    });
    
});
