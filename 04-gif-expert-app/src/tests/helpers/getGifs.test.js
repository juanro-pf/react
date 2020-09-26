const { getGifs } = require("../../helpers/getGifs")

describe('Pruebas con getGifs', () => {
    
    test('10 elementos', async() => {
        
        const gifs= await getGifs('Goku');

        expect(gifs.length).toBe(10);

    });

    test('10 elementos', async() => {
        
        const gifs= await getGifs('');

        expect(gifs.length).toBe(0);

    });

})
