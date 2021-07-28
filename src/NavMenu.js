import { Link } from 'react-router-dom';
import './NavMenu.css';
let NavMenu = () => {
  return (
    <nav>
      <Link to="/pokemon" class="nav-link">Home</Link>
      <Link to="/about" class="nav-link">About</Link>
    </nav >
  )
}

export default NavMenu