import { Route, Link, useRouteMatch } from 'react-router-dom';
import PokeInfo from './PokeInfo.js';

export default function PokedexEntry({ pokemon, index }) {
  let { path, url} = useRouteMatch();
  let randomPokemonPng = Math.floor(Math.random() * 152 - 1) + 1;
  return (
    <div key={index} >
      <img src={`https://images.alexonsager.net/pokemon/fused/${index + 1}/${index + 1}.${randomPokemonPng}.png`} alt={`Pokemon: ${pokemon.name}`} />
      <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
      <Route path={`pokemon/${index + 1}`}>
        <PokeInfo url={window.location.pathname} />
      </Route>
    </div>
  )
}