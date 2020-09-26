import React from 'react';
import { shallow, mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

import '@testing-library/jest-dom';

describe('Testing HomeScreen', () => {

    const user= {
        name: 'Juan Ro',
        email: 'email'
    }
    
    //mount se usa para ver tambien los componentes dentro de componentes (HomeScreen dentro de Usecontext.Provider)
    const wrapper= mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('Snapshot', () => {

        expect(wrapper).toMatchSnapshot();

    });
    

});
