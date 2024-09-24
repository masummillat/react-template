import React from "react";
import { useNavigate } from "react-router-dom"; // or 'useHistory' if using older react-router versions
import { Auth0Provider } from "@auth0/auth0-react";

interface Auth0ProviderWithHistoryProps {
  children: React.ReactNode;
}

const Auth0ProviderWithHistory = ({
  children,
}: Auth0ProviderWithHistoryProps) => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN!;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID!;
  // const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI!;
  const audiance = `https://${domain}/api/v2/`; // Set the audience here
  // const audiance = `http://localhost:3000`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onRedirectCallback = (appState: any) => {
    console.log("appState", appState);
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin, // Newer version of `redirectUri`
        audience: audiance, // Set the audience here
        scope: "openid profile email offline_access",
      }}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
