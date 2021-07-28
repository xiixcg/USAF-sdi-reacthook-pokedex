import { useState, useEffect } from 'react'
import { Route, Link, useRouteMatch} from 'react-router-dom';
import PokeInfo from './PokeInfo.js';
import PokedexEntry from './PokedexEntry';

let Pokedex = ({ match, history }) => {
  let {path, url} = useRouteMatch();
  let [pokeMasterList, setPokeMasterList] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(pokelist => setPokeMasterList(pokelist.results))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      {
        pokeMasterList.map((pokemon, index) => <PokedexEntry pokemon={pokemon} index={index} />)
      }
    </div>
  )
}

export default Pokedex