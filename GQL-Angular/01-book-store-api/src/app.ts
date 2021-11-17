import { ApolloServer } from "apollo-server-express";
import { GraphQLSchema } from "graphql";
// herramientas de GRaphQL Tools
import { makeExecutableSchema } from "@graphql-tools/schema";

import compression from "compression";
import express from "express";
import { createServer } from "http";
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const app = express();

app.use(compression());
app.use("/", ( _, res ) => {
    res.send("Bienvenidos al proyecto");
});

const httpServer = createServer(app);

const schema: GraphQLSchema = makeExecutableSchema({typeDefs,resolvers });
const server = new ApolloServer({typeDefs,resolvers });

httpServer.listen({ port: 3025 }, () => {
    console.log ("servidor => http://localhost:3025");
})