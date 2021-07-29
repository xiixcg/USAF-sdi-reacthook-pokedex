import './App.css';
import NavMenu from "./NavMenu.js";
import About from "./About.js";
import Pokedex from "./Pokedex.js";
import PokeInfo from "./PokeInfo.js";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className="main-div bg-danger">
      <Router>
        <NavMenu />
        <Container className="bg-dark p-0">
          <Card.Body>
            <div className="scroll-area-sm bg-light">
              <Route exact path="/" render={() => (<Redirect to="/pokedex" />)} />
              <Route exact path="/pokedex" component={Pokedex} />
              <Route path="/about" component={About} />
              <Route path="/pokedex/:pokemonId" component={PokeInfo} />
            </div>
          </Card.Body>
        </Container>
      </Router>
    </div>
  );
}

export default App;
