import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas de 09-priomesas', () => {
    
    test('getHeroeByIdAsync', ( done ) => {
        
        const id= 1;

        getHeroeByIdAsync(id)
            .then( heroe => {

                expect(heroe).toBe(heroes[id - 1]);
                done();

            });

    });

    test('getHeroeByIdAsync false', ( done ) => {
        
        const id= 10;

        getHeroeByIdAsync(id)
            .catch( error => {

                expect(error).toBe('No se pudo encontrar el héroe');
                done();

            });

    });
    

});
