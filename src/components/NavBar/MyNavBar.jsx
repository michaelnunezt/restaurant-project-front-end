import { Link } from "react-router-dom";

const MyNavBar = ({ user, handleSignOut }) => {
  return (
    <>
      {user ? (
        <nav className="fixed-top">
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="" onClick={handleSignOut}>Sign Out</Link>
            </li>
          </>
        </nav>
      ) : (
        <nav className="fixed-top">
          <ul className="d-flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
            <li>
              <Link to="/signIn">Sign In</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default MyNavBar;
