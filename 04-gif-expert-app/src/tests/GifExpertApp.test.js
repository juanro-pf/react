import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas a GifExpertApp', () => {
    
    test('Snapshot', () => {
        
        const wrapper= shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();

    });
    
    test('mostrar lista de categorias', () => {
        
        const categories= ['Batman', 'Superman'];

        const wrapper= shallow(<GifExpertApp defaulCategories={ categories }/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });
    

});
