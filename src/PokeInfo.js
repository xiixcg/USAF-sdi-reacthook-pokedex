import { useState, useEffect } from 'react'

let PokeInfo = ({ url }) => {

  const [selectedPokemon, setSelectedPokemon] = useState({})

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(pokemon => setSelectedPokemon(pokemon))
      .catch(err => console.error(err))
  }, [])

  if (Object.keys(selectedPokemon).length === 0) {
    return <div></div>
  } else {
    return (
      <div>
        <p>Name: {selectedPokemon.name}</p>
        <ul>
          {
            selectedPokemon.abilities.map(item => <li>{item.ability.name}</li>)
          }
        </ul>

      </div>
    )
  }
}


export default PokeInfo