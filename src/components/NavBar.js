import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const auth0 = useAuth0();
  const navigateTo = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center border">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col  ">
            {auth0.isAuthenticated && (
              <Link to="/" style={{ padding: "5px" }}>
                <span>My Jobs</span>
                <img width="30" height="30" src={logo2} alt="Logo" />
              </Link>
            )}
          </div>
          <div className="col text-center">
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
    </div>
  );
};

export default NavBar;
