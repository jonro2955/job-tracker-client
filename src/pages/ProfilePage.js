import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const Profile = () => {
  const { user, logout } = useAuth0();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="centeredPage">
      <h1>Profile</h1>
      <button onClick={goBack}>Back</button>
      {user.email && <p>Email: {user.email}</p>}
      {user.family_name && <p>Family name: {user.family_name}</p>}
      {user.given_name && <p>Given name: {user.given_name}</p>}
      {user.name && <p>Name: {user.name}</p>}
      {user.locale && <p>Locale: {user.locale}</p>}
      {user.nickname && <p>Nickname: {user.nickname}</p>}
      <button className="btn btn-primary" onClick={() => logout()}>
        Log out
      </button>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <LoadingSpinner />,
});
