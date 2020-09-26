import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

import '@testing-library/jest-dom';

describe('Testing AppRouter', () => {

    const user= {
        name: 'Juan Ro',
        email: 'email'
    };

    const wrapper= mount(
        <UserContext.Provider value= {user}
        >
            <AppRouter />
        </UserContext.Provider>
    );
    
    test('Snapshot', () => {
        
        expect(wrapper).toMatchSnapshot();

    });
    

});
