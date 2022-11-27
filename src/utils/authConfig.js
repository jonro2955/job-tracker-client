import history from "./history";

const appConfig = {
  domain: "dev-9npol9r6.us.auth0.com",
  clientId: "4GfZ4cfLN9HiX42YH3oWPq8NHKTiCAIS",
};

const onRedirectCallback = (appState) => {
  history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
};

export const authConfig = {
  domain: appConfig.domain,
  clientId: appConfig.clientId,
  redirectUri: window.location.origin,
  onRedirectCallback,
};
