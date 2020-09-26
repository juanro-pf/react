import '@testing-library/jest-dom';
import React, { Children } from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas al CounterApp', () => {

    let wrapper= shallow(<CounterApp value={ 100 }/>);

    beforeEach(() => {

        wrapper= shallow(<CounterApp value={ 100 }/>);

    })
    
    test('CounterApp snapshot ', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('CounterApp value ', () => {
        
        // const wrapper= shallow(<CounterApp value={ 100 }/>);

        const value= wrapper.find('h2').at(0).text();

        expect(Number(value)).toBe(100);

    });

    test('+1', () => {

        wrapper.find('button').at(0).simulate('click');

        const counter= wrapper.find('h2').at(1).text();

        expect(Number(counter)).toBe(101);
        
    });

    test('-1', () => {

        wrapper.find('button').at(2).simulate('click');

        const counter= wrapper.find('h2').at(1).text();

        expect(Number(counter)).toBe(99);
        
    });

    test('reset', () => {
        
        wrapper.find('button').at(0).simulate('click');
        console.log(wrapper.find('h2').at(1).text())
        wrapper.find('button').at(0).simulate('click');
        console.log(wrapper.find('h2').at(1).text())
        wrapper.find('button').at(1).simulate('click');
        console.log(wrapper.find('h2').at(1).text())

        const counter= wrapper.find('h2').at(1).text();

        expect(Number(counter)).toBe(100);

    })
    
    
});
