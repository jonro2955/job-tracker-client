import React, { useReducer, useEffect } from "react";
import MyRoutes from "./Routes";
import Context from "./utils/context";
import * as AuthReducer from "./store/reducers/authReducer";
import * as ACTIONS from "./store/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

export default function ContextState() {
  const auth0 = useAuth0();

  /*Auth Reducer: although auth0 object keeps global auth state, we'll keep our own in a reducer */
  const [stateAuthReducer, dispatchAuthReducer] = useReducer(
    AuthReducer.AuthReducer,
    AuthReducer.initialState
  );

  const dispatchLogin = () => {
    dispatchAuthReducer(ACTIONS.login_success());
  };

  const dispatchLogout = () => {
    dispatchAuthReducer(ACTIONS.login_failure());
  };

  const dispatchSetAuthProfile = (profile) => {
    dispatchAuthReducer(ACTIONS.set_profile(profile));
  };

  const dispatchSetDbProfile = (profile) => {
    dispatchAuthReducer(ACTIONS.set_db_profile(profile));
  };

  const dispatchRemoveAuthProfile = () => {
    dispatchAuthReducer(ACTIONS.remove_profile());
  };

  /* When the auth state changes, dispatch the auth reducer */
  useEffect(() => {
    setTimeout(() => {
      history.replace("/dispatchauth");
    }, 200);
  }, [auth0.isAuthenticated]);

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

        //Auth Reducer
        //keep for global state
        stateAuthReducer: stateAuthReducer,
        isAuthenticated: stateAuthReducer.isAuthenticated,
        dbProfileState: stateAuthReducer.dbProfile,
        authProfile: stateAuthReducer.authProfile,
      }}
    >
      <MyRoutes />
    </Context.Provider>
  );
}
