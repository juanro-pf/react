import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

  const location= useLocation();
  
  const { hero= '' }= queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({
    searchText: hero
  });
  
  const { searchText }= formValues;
  
  const heroesFiltered= useMemo(() => getHeroesByName(hero), [hero]);

  const handleSearch= (e) => {
    
    e.preventDefault();

    history.push(`?hero=${searchText}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className='row'>

        <div className='col-5'>
          <h4>Search Form</h4>
          <hr />

          <form>
            <input
              type= 'text'
              placeholder= 'Find your hero'
              className= 'form-control'
              name= 'searchText'
              autoComplete='off'
              value= { searchText }
              onChange= { handleInputChange }
            />

            <button
              type= 'submit'
              className='btn m-1 btn-block btn-outline-primary'
              onClick= { handleSearch }
            >
              Search
            </button>
          </form>

        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {
            (hero === '')
              &&
              <div className='alert alert-info'>
                Search a hero
              </div>
          }

          {
            (hero !== '' && heroesFiltered.length === 0)
              &&
              <div className='alert alert-danger'>
                No heroes match with { hero }
              </div>
          }

          {
            heroesFiltered.map(hero =>
            <HeroCard
              key= { hero.id }
              { ...hero }
            />)
          }

        </div>

      </div>
    </div>
  );
};
