let NavMenu = ({setPage}) => {
  return (
    <nav>
      <ol>
        <li onClick={() => setPage('home')}>Home</li>
        <li onClick={() => setPage('about')}>About</li>
      </ol>
    </nav>
  )
}

export default NavMenu