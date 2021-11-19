/**
 * This is the initial file next.js looks for and
 * sets up common functionality for all pages.
 * 
 * @author Jordan Baumgardner
 * @history 2021-11-18 Jordan Baumgardner - Original
 */

// Import global styling.
import "../styles/globals.css";
import 'tailwindcss/tailwind.css';

// Import Apollo to interact with GraphQL.
import { ApolloProvider } from "@apollo/client";

// Custom code to setup connection to GraphQL.
import { useApollo } from "../src/apolloClient";

function MyApp({ Component, pageProps }) {
  const client = useApollo();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
