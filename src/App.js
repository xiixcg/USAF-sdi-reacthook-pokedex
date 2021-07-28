import './App.css';
import NavMenu from "./NavMenu.js";
import About from "./About.js";
import Home from "./Home.js";
import {useState} from 'react';


function App() {
  let [page, setPage] = useState('home');
  return (
    <div>
      <NavMenu setPage={setPage}/>
      { page === 'about' ? (<About />) : (<Home />)}
    </div>
  );
}

export default App;
