/**
 * This initializes and sets up the pollo client.
 *
 * @author Jordan Baumgardner
 * @history 2021-11-18 Jordan Baumgardner - Original
 */

import {
  InMemoryCache,
  ApolloClient,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;

// Creates a new instance of the apollo client.
function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: "/api/graphql",
    }),
    cache: new InMemoryCache(),
  });
}

// Checks if there is already an apollo client; if not, creates one.
function initializeApollo() {
  apolloClient = apolloClient ?? createApolloClient();
  return apolloClient;
}

// Calls the initialization.
export function useApollo() {
  return initializeApollo();
}
