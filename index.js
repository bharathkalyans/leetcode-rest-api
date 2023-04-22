import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/index.js";
import { resolvers } from "./resolvers/index.js";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import express from "express";

const PORT = process.env.PORT || 4000;
dotenv.config();

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/graphql",
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

// Modified server startup
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/`);
