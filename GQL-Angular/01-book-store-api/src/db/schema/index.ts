import "graphql-import-node"; //genera el módulo schema.graphql
import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLSchema } from "graphql";
import typeDefs from './schema.graphql';
import resolvers from '../resolvers';

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;