import React from 'react';
import { HookApp } from '../HookApp';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom';

describe('Testing HookApp', () => {
    
    test('Snapshot', () => {
        
        const wrapper= shallow(<HookApp />);

        expect(wrapper).toMatchSnapshot();

    });
    

});
