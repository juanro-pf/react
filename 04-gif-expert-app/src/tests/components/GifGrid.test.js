import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas a GifGrid', () => {
        
    const category= 'Batman';

    test('Snapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper= shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();

    });

    test('mostar items al cargar imagenes con useFetchGifs', () => {
        
        const imgs= [{
            id: 'ABC',
            url: 'http://asd.jpg',
            title: 'Title'
        },
        {
            id: 'ABCD',
            url: 'http://asd.jpg',
            title: 'Title'
        }];

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });

        const wrapper= shallow(<GifGrid category={category}/>);

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);

    });    
    
});
