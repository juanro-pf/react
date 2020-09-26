import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes';

describe('Pruebas de 08-imp-exp', () => {
    
    test('getHeroeById ', () => {
        
        const id= 1;
        const heroeTest= getHeroeById(id);

        const heroeData= heroes.find(h => h.id === id);

        expect(heroeTest).toEqual(heroeData);
    });
    
    test('getHeroeById undefined', () => {
        
        const id= 6;
        const heroeTest= getHeroeById(id);

        expect(heroeTest).toBe(undefined);
    });

    test('getHeroesByOwner DC', () => {
        
        const owner= 'DC';
        const heroeTest= getHeroesByOwner(owner);

        const heroeData= heroes.filter(h => h.owner === owner);

        expect(heroeTest).toEqual(heroeData);
    });

    test('getHeroesByOwner Marvel', () => {
        
        const owner= 'Marvel';
        const heroeTest= getHeroesByOwner(owner);

        const heroeDataLength= heroes.filter(h => h.owner === owner).length;

        expect(heroeTest.length).toBe(heroeDataLength);
    });

});
