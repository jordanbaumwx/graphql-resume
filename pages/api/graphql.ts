/**
 * This page is responsible for setting up the GraphQL API endpoint.
 *
 * @author Jordan Baumgardner
 * @history 2021-11-18 Jordan Baumgardner - Original
 */

import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-micro";

// Import the schema for the app
import { schema } from "../../src/schema";

// Setup the server using the schema and a simple playground.
const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});
await server.start();

// Have the server listen to the endpoint.
const handler = server.createHandler({ path: "/api/graphql" });

// Add a configuration to properly parse the graphql input.
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
