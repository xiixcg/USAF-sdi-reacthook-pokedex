import { useState, useEffect } from 'react'

let PokeInfo = ({ url }) => {

  const [selectedPokemon, setSelectedPokemon] = useState({})

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(pokemon => setSelectedPokemon(pokemon))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      {console.log(selectedPokemon)}
    </div>
  )
}


export default PokeInfo