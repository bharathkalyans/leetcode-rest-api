import { colors } from "colors";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import dotenv from "dotenv";

const PORT = process.env.PORT || 4000;

dotenv.config();

const server = ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({ token: req.headers.token }),
  listen: { port: PORT },
});

console.log(`🚀 Server ready at ${PORT}`);
