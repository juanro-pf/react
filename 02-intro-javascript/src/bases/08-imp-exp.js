// import superheroes from './data/heroes'
// import { heroes } from './data/heroes'
import heroes, { owners } from './data/heroes'

// const getHeroeById= (id) => {
//   return heroes.find( (heroe) => {
//     if(heroe.id === id){
//       return true
//     }else{
//       return false
//     }
//   })
// }

const getHeroeById= id => heroes.find( heroe => heroe.id === id )

const getHeroeByOwner= owner => heroes.filter( heroe => heroe.owner === owner )

console.log( getHeroeById(6) )

console.log( getHeroeByOwner('DC') )

console.log( owners )