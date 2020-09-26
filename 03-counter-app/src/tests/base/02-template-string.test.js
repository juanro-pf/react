import '@testing-library/jest-dom'

const { getSaludo } = require("../../base/02-template-string");

describe('Pruebas en 02-template-string', () => {

    test('Prueba en getSaludo con argumento', () => {

        const nombre= 'Fernando';

        const saludo= getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);

    });

    test('Prueba en getSaludo sin argumento', () => {

        const saludo= getSaludo()

        expect(saludo).toBe('Hola Carlos')

    })

});