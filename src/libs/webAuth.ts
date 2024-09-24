import auth0 from 'auth0-js';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '@src/constants';

export const webAuth = new auth0.WebAuth({
    domain:       AUTH0_DOMAIN,
    clientID:     AUTH0_CLIENT_ID
  });