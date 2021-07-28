import './App.css';
import NavMenu from "./NavMenu.js";
import About from "./About.js";
import Pokedex from "./Pokedex.js";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <NavMenu />
        <Route exact path="/" render={() => (<Redirect to="/pokemon" />)} />
        <Route path="/pokemon" component={Pokedex} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
