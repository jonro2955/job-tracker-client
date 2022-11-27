import React, { useContext } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingSpinner from "../components/LoadingSpinner";
import Context from "../utils/context";

const Profile = () => {
  const { user, logout } = useAuth0();
  const context = useContext(Context);

  return (
    <div className="centeredPage">
      <h1>Profile</h1>
      <button className="btn btn-primary" onClick={() => logout()}>
        Log out
      </button>
      {user.email && <p>Email: {user.email}</p>}
      {user.family_name && <p>Family name: {user.family_name}</p>}
      {user.given_name && <p>Given name: {user.given_name}</p>}
      {user.name && <p>Name: {user.name}</p>}
      {user.locale && <p>Locale: {user.locale}</p>}
      {user.nickname && <p>Nickname: {user.nickname}</p>}
      {user.sub && <p>User ID: {user.sub}</p>}
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log(context.stateAuthReducer);
          console.log(user);
        }}
        style={{ padding: "5px" }}
      >
        Log the user profile(stateAuthReducer) to the console
      </button>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <LoadingSpinner />,
});
