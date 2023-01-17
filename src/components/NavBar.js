import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const auth0 = useAuth0();
  const navigateTo = useNavigate();

  return (
    <div className="d-flex justify-content-center border">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light "> */}
      {/* <div
          className="collapse navbar-collapse container"
          id="navbarSupportedContent"
        > */}
      {/* <ul className="navbar-nav mr-auto row">
            <li className="nav-item active col">
              <Link to="/add" style={{ padding: "5px" }}>
                Add
              </Link>
            </li>
            <li className="nav-item col">
              <Link to="/jobs" style={{ padding: "5px" }}>
                Jobs
              </Link>
            </li>
            <li className="nav-item col">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    auth0.isAuthenticated
                      ? navigateTo("/profile")
                      : auth0.loginWithPopup();
                  }}
                >
                  {auth0.isAuthenticated ? auth0.user.email : "Log in"}
                </button>
            </li>
          </ul> */}

      {/*  */}

      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col  ">
            <Link to="/" style={{ padding: "5px" }}>
              <img width="30" height="30" src={logo2} alt="Logo" />
            </Link>
          </div>
          <div className="col   text-center">
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                auth0.isAuthenticated
                  ? navigateTo("/profile")
                  : auth0.loginWithPopup();
              }}
            >
              {auth0.isAuthenticated ? auth0.user.email : "Log in"}
            </button>
          </div>
          <div className="col  "></div>
        </div>
      </div>

      {/*  */}
    </div>
    //   </nav>
    // </div>
  );
};

export default NavBar;
