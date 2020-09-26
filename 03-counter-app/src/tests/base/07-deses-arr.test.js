import '@testing-library/jest-dom'
const { retornaArreglo } = require("../../base/07-deses-arr")

describe('Pruebas en 07-deses', () => {
    
    test('retornaArreglo ', () => {
        
        // const arr= ['ABC', 123];
        
        // const arrTest= retornaArreglo();

        const [ letras, numeros ]= retornaArreglo();

        expect(letras).toBe('ABC');

        expect(numeros).toBe(123);

        // expect(arr).toEqual(arrTest)

    });
    

});
