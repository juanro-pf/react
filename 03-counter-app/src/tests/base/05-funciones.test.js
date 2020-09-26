import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('pruebas en 05-funciones', () => {
    
    test('getUser', () => {
        
        const user= {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const userTest= getUser();

        expect(userTest).toEqual(user)

    });

    test('getUserActivo', () => {
        
        const nombre= "JuanRo";

        const user= {
            uid: 'ABC567',
            username: nombre
        };

        const userTest= getUsuarioActivo(nombre);

        expect(userTest).toEqual(user);
    });
    

});
