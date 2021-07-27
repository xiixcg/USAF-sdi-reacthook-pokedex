import { useState, useEffect } from 'react'
//<PokeList props=/>

//https://images.alexonsager.net/pokemon/fused/${index + 1}/${index + 1}.129.png
let PokeList = ({ setPokeInfoURL }) => {
  const [pokeMasterList, setPokeMasterList] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(pokelist => setPokeMasterList(pokelist.results))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      {
        pokeMasterList.map((pokemon, index) => <div key={index} onClick={() => setPokeInfoURL(pokemon.url)}> <img src={`https://images.alexonsager.net/pokemon/fused/${index + 1}/${index + 1}.129.png`} alt="pokemon" /> {pokemon.name}</div>)
      }
    </div>
  )
}

export default PokeList