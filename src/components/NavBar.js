import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const auth0 = useAuth0();
  const navigateTo = useNavigate();

  return (
    <div className="d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/home" style={{ padding: "5px" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search" style={{ padding: "5px" }}>
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" style={{ padding: "5px" }}>
                About
              </Link>
            </li>
          </ul>
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              auth0.isAuthenticated ? navigateTo("/profile") : auth0.loginWithPopup();
            }}
          >
            {auth0.isAuthenticated ? auth0.user.email : "Log in"}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
