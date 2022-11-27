import React, { useEffect, useContext } from "react";
import history from "../utils/history";
import Context from "../utils/context";
import axios from "axios";

export default function DispatchAuthPage() {
  const context = useContext(Context);

  useEffect(() => {
    if (context.auth0.isAuthenticated) {
      let profile = context.auth0.user;
      context.dispatchLogin();
      context.dispatchSetAuthProfile(profile);
      axios
        .post("/api/post/userprofiletodb", profile)
        .then(
          axios
            .get("/api/get/userprofilefromdb", { params: { email: profile.email } })
            .then((res) => {
              context.dispatchSetDbProfile(res.data[0]);
            })
        )
        .then(history.replace("/"));
    } else {
      context.dispatchLogout();
      context.dispatchRemoveAuthProfile();
    }
    history.replace("/");
  });

  return (
    <div>
      <h1>DispatchAuthPage</h1>
    </div>
  );
}
