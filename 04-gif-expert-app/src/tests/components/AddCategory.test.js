import React from 'react';
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");
import '@testing-library/jest-dom';

describe('AdCategory', () => {

    const setCategories= jest.fn();
    let wrapper= shallow( <AddCategory setCategories={ setCategories }/>);
    
    beforeEach( () => {
        jest.clearAllMocks;
        wrapper= shallow( <AddCategory setCategories={ setCategories }/>);
    });

    test('Snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('change text box', () => {
        
        const input= wrapper.find('input');
        const value= 'Hola mundo';
        
        input.simulate('change', { target: {value} });
        
        const inputValue= wrapper.find('p').text().trim();

        expect(inputValue).toBe(value);

    });
    
    test('no postear info onSubmit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
        
    });

    test('lamar el setCategories y limpiar la text box', () => {

        const value= 'Hola mundo';
        
        wrapper.find('input').simulate('change', { target: {value} });
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ); // Haberlo llamado con una función como parametro
        
        const afterValue= wrapper.find('input').prop('value');

        expect(afterValue).toBe('');
        
    });
    
    
});