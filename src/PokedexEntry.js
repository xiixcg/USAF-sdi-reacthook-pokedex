import { Link, useRouteMatch } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './PokedexEntry.css';

export default function PokedexEntry({ pokemon, index}) {
  let { url} = useRouteMatch();
  let pokemonId = index + 1;
  let randomPokemonId = Math.floor(Math.random() * 152 - 1) + 1;
  let mixedPokemonImageUrl = `https://images.alexonsager.net/pokemon/fused/${pokemonId}/${pokemonId}.${randomPokemonId}.png`

  return (
    <Card className="pokemon-card col-sm-6 col-md-4 col-lg-3 bg-warning p-3" >
      <img
          src={mixedPokemonImageUrl}
          alt={`Pokemon: ${pokemon.name}`}
          height="100vh"
          weight="100wh"/>
      <Link className="pokemon-link" to={{ pathname: `${url}/${pokemonId}`, state: {imageUrl: mixedPokemonImageUrl}}}>{pokemon.name}</Link>
    </Card>
  )
}