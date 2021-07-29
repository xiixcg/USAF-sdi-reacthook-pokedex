import { useState, useEffect } from 'react';
import {useParams, useLocation} from 'react-router-dom';

let PokeInfo = () => {
  let {pokemonId} = useParams();
  let {imageUrl} = useLocation().state;
  const [selectedPokemon, setSelectedPokemon] = useState({})

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(pokemon => setSelectedPokemon(pokemon))
      .catch(err => console.error(err))
  }, [pokemonId, setSelectedPokemon])

  if (Object.keys(selectedPokemon).length === 0) {
    return <div></div>
  } else {
    return (
      <div>
        <img
            src={imageUrl}
            alt={`Pokemon: ${selectedPokemon.name}`}
            height="60vh"
            width="100vh"/>
        <p>Name: {selectedPokemon.name}</p>
        <ul>
          {
            selectedPokemon.abilities.map((item, index) => <li key={index}>{item.ability.name}</li>)
          }
        </ul>

      </div>
    )
  }
}


export default PokeInfo