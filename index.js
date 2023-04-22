import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/index.js";
import { resolvers } from "./resolvers/index.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 4000;

dotenv.config();

const server = new ApolloServer({ typeDefs, resolvers });

const main = async () => {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
    listen: { port: PORT },
  });

  console.log(`🚀 Server ready at ${PORT}, ${url}`);
  console.log(`Query at : ${"https://studio.apollographql.com/dev"}`);
};

main();
