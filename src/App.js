import React, { useReducer, useEffect } from "react";
import Context from "./utils/context";
import * as AuthReducer from "./store/reducers/authReducer";
import * as ACTIONS from "./store/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";

export default function ContextState() {
  const auth0 = useAuth0();

  useEffect(() => {
    if (auth0.isAuthenticated) {
      let profile = auth0.user;
      dispatchLogin();
      dispatchSetAuthProfile(profile);
      axios.post("/api/post/userprofiletodb", profile).then(
        axios
          .get("/api/get/userprofilefromdb", { params: { email: profile.email } })
          .then((res) => {
            dispatchSetDbProfile(res.data[0]);
          })
      );
    } else {
      dispatchLogout();
      dispatchRemoveAuthProfile();
    }
  }, [auth0.isAuthenticated, auth0.user]);

  /*Auth Reducer: although the useAuth0 library object provides global auth state access from the cloud, 
  storing our own version in a reducer at login allows for local retrieval of auth state values 
  in between login/logout*/
  const [stateAuthReducer, dispatchAuthReducer] = useReducer(
    AuthReducer.AuthReducer,
    AuthReducer.initialState
  );

  function dispatchLogin() {
    dispatchAuthReducer(ACTIONS.login_success());
  }

  function dispatchLogout() {
    dispatchAuthReducer(ACTIONS.login_failure());
  }

  function dispatchSetAuthProfile(profile) {
    dispatchAuthReducer(ACTIONS.set_profile(profile));
  }

  function dispatchSetDbProfile(profile) {
    dispatchAuthReducer(ACTIONS.set_db_profile(profile));
  }

  function dispatchRemoveAuthProfile() {
    dispatchAuthReducer(ACTIONS.remove_profile());
  }

  return (
    <Context.Provider
      value={{
        auth0: auth0,
        user: auth0.user,
        dispatchLogin: () => dispatchLogin(),
        dispatchLogout: () => dispatchLogout(),
        dispatchSetAuthProfile: (profile) => dispatchSetAuthProfile(profile),
        dispatchRemoveAuthProfile: () => dispatchRemoveAuthProfile(),
        dispatchSetDbProfile: (profile) => dispatchSetDbProfile(profile),
        //Auth Reducer - keep for global state
        stateAuthReducer: stateAuthReducer,
        isAuthenticated: stateAuthReducer.isAuthenticated,
        dbProfileState: stateAuthReducer.dbProfile,
        authProfile: stateAuthReducer.authProfile,
      }}
    >
      <HashRouter basename="/">
        <NavBar />
        <h5 className="text-center text-warning">Project Under Construction</h5>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </HashRouter>
    </Context.Provider>
  );
}
