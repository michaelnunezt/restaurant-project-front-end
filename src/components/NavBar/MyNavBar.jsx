import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import './MyNavBar.css'; // Create this file for custom styles

const MyNavBar = ({ user, handleSignOut }) => {
  return (
    <Navbar className="fixed-top custom-navbar" expand="lg">
      <Container className="justify-content-between">
        <Navbar.Brand className="navbar-brand" href="/">
          Oriole
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="nav-links d-flex gap-4">
            <Link className="nav-link" to="/">Home</Link>
            {user ? (
              <Link className="nav-link" to="/" onClick={handleSignOut}>Sign Out</Link>
            ) : (
              <>
                <Link className="nav-link" to="/signUp">Sign Up</Link>
                <Link className="nav-link" to="/signIn">Sign In</Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;