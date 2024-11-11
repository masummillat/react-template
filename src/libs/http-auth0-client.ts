import { Auth0Client } from "@auth0/auth0-spa-js";


const domain = import.meta.env.VITE_AUTH0_DOMAIN || "";
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || "";
const audience = `https://${domain}/api/v2/`;

export const httpAuth0 = new Auth0Client({
  domain,
  clientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
    scope: 'openid email profile offline_access',
    audience: audience,
    
  },
  cacheLocation: "localstorage",
  useRefreshTokens: true,
  
});

export const getAccessToken = async () => {
  return  httpAuth0.getTokenSilently().catch(e => console.error('Failed to retrieve token:', e));
};

export const httpAuth0ClientLogout = async () => {
  await httpAuth0.logout({
    openUrl: false,
    logoutParams: {
      returnTo: window.location.origin,
    }
  });
};
