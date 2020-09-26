import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas a PrimeraApp', () => {
    
    // test('Debe de mostrar Hola soy goku', () => {
        
    //     const saludos= 'Hola soy Goku';

    //     const { getByText }= render( <PrimeraApp saludos={saludos}/> )

    //     expect(getByText(saludos)).toBeInTheDocument();
    // });
    
    test('Pruebas a PrimeraApp', () => {

        const saludos= 'Hola soy Goku';
        
        const wrapper= shallow(<PrimeraApp saludos={saludos}/>);

        expect(wrapper).toMatchSnapshot();

    });

    test('must show subtitle ', () => {
        
        const saludos= 'Hola soy Goku';
        const subtitulo= "Soy un subtitulo";

        const wrapper= shallow(
            <PrimeraApp
                saludos={saludos}
                subtitulo= {subtitulo}
            />
        );

        const textoParrafo= wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulo);

    });

});
