import { Link } from 'react-router-dom'

const NavBar = ({ user }) => {
  
  
  return (
    <>
      { user ? (
        <nav>
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="">Sign Out</Link></li>
          </>
        </nav>
      ) : (
        <nav className=''>
          <ul className='d-flex gap-4'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signUp">Sign Up</Link></li>
            <li><Link to="/signIn">Sign In</Link></li>
          </ul>
        </nav>
      )}
    </>
  )
}

export default NavBar;