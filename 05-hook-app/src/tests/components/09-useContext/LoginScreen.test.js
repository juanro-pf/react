import React from 'react';
import { act } from '@testing-library/react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

import '@testing-library/jest-dom';

describe('Testing LoginScreen', () => {

    const setUser= jest.fn();
    
    //mount se usa para ver tambien los componentes dentro de componentes (HomeScreen dentro de Usecontext.Provider)
    const wrapper= mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );
    
    test('Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('setUser with desired argument', () => {
        
        wrapper.find('button').simulate('click');

        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenCalledWith({
            id: 1234,
            name: 'Juan Ro'
        });

    });
    

});
