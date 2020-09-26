import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Testing useForm', () => {

    const initialState= {
        name: 'Juanro',
        email: 'email'
    };
    
    test('default', () => {

        const { result }= renderHook( () => useForm(initialState) );

        expect(result.current[0]).toEqual(initialState);
        expect(typeof result.current[1]).toBe('function');
        expect(typeof result.current[2]).toBe('function');
        
    });

    test('change name', () => {

        const { result }= renderHook( () => useForm(initialState) );

        const handleInputChange= result.current[1];

        const update= {
            target: {
                name: 'name',
                value: 'otro'
            }
        };

        act( () => {
            handleInputChange(update);
        });

        expect(result.current[0]).toEqual({...initialState, name: 'otro'});
        
    });

    test('reset', () => {
        
        const {result}= renderHook( () => useForm(initialState) );

        const [ , handleInputChange, reset ] = result.current;

        const update= {
            target: {
                name: 'name',
                value: 'otro'
            }
        };

        act( () => {
            handleInputChange(update);
            reset();
        });

        expect(result.current[0]).toEqual(initialState);

    });

});
