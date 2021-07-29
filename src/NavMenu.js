import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.png';
const NavMenu = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container>
        <Navbar.Brand href="/pokedex">
          <img
            alt="Pokedex logo"
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/pokedex">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container >
    </Navbar>
  )
}

export default NavMenu