import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Testing RealExampleRef', () => {

    const wrapper= shallow(<RealExampleRef />);
    
    test('Snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });

    test('show MultipleCustomHooks', () => {

        wrapper.find('button').simulate('click');

        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

    });
    
});
