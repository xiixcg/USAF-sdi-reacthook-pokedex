import { useState } from 'react';
import PokeList from './PokeList.js'
import PokeInfo from './PokeInfo.js'

let Home = () => {
  const [pokeInfoURL, setPokeInfoURL] = useState(null);

  if (pokeInfoURL === null) {
    return (
      <div>
        <PokeList setPokeInfoURL={setPokeInfoURL} />
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={() => setPokeInfoURL(null)}>Back</button>
        <PokeInfo url={pokeInfoURL} />
      </div>
    )
  }

}

export default Home