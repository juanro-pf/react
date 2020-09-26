import React from 'react';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { shallow } from 'enzyme';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

import '@testing-library/jest-dom';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Testing MultipleCustomHooks', () => {
    
    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });

    test('Snapshot', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        
        const wrapper= shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();

    });

    test('show info', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Juan Ro',
                quote: 'Ehhh'
            }],
            loading: false,
            error: null
        });

        const wrapper= shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Ehhh');
        expect(wrapper.find('footer').text().trim()).toBe('Juan Ro');
        
    });
    
    test('show info', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Juan Ro',
                quote: 'Ehhh'
            }],
            loading: false,
            error: null
        });

        const wrapper= shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Ehhh');
        expect(wrapper.find('footer').text().trim()).toBe('Juan Ro');
        
    });
    
});
