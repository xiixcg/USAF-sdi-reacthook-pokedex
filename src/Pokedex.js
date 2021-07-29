import { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import PokedexEntry from './PokedexEntry';

let Pokedex = () => {
  let [pokeMasterList, setPokeMasterList] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(pokelist => setPokeMasterList(pokelist.results))
      .catch(err => console.error(err))
  }, [])

  return (
    <Container>
      <Row>
        {
          pokeMasterList.map((pokemon, index) => <PokedexEntry key={index} pokemon={pokemon} index={index} />)
        }
      </Row>
    </Container>
  )
}

export default Pokedex