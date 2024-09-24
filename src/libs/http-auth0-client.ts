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

export const getAccessToken = async (): Promise<string> => {
  return await httpAuth0.getTokenSilently();
};
