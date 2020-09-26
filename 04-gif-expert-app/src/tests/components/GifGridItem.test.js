import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require("enzyme");
const { GifGridItem } = require("../../components/GifGridItem");

describe('Pruebas a GifGridItem,', () => {

    const title= 'Titulo';
    const url= 'https://localhost/algo.jpg';
    const wrapper= shallow( 
        <GifGridItem
            title={title}
            url={url}
        />);
    
    test('GifGridItem', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('parrafo con titulo ', () => {
        
        const p= wrapper.find('p').text().trim();

        expect(p).toBe(title);

    });
    
    test('imagen con parametros ', () => {
        
        const { src, alt }= wrapper.find('img').props();
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

    test('div con className ', () => {
        
        const div= wrapper.find('div').prop('className');
        
        expect(div.includes('animate__fadeIn')).toBe(true);

    });
    

});
