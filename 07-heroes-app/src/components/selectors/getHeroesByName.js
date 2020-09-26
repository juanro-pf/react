import { heroes } from "../../data/heroes";

export const getHeroesByName= (name = '') => {

  if( name === ''){
    return [];
  }

  const superhero= name.toLocaleLowerCase();

  return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(superhero));

};