import '@testing-library/jest-dom'
import { getImagen } from '../../base/11-async-await'

describe('Pruebas a 11-async-await y fetch', () => {
    
    test('getImagen', async() => {
        
        const url= await getImagen();
        
        // console.log(url)
        expect(url.includes('https://')).toBe(true)

    })
    

})