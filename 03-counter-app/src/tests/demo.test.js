
describe('Pruebas en demo.test.js', () => {
    
    test( 'strings must be equal', () => {
    
        //inicialización
        const mensaje= 'Hola mundo';
    
        //estimulo
        const mensaje2= 'Hola mundo';
    
        //observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
    
});
