import { ApolloServer } from "apollo-server-express";
import compression from "compression";
import express, { Application } from "express";
import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { createServer, Server } from "http";
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

class GraphQLServer {
    //propiedades
    private app!: Application;
    private httpServer!: Server;
    private readonly DEFAULT_PORT = 3025;

    constructor(){
        this.init();
    }
    
    private init() {
        this.configExpress();
        this.configApolloExpress();
        this.configRoutes();
    }

    private configExpress(){
        this.app = express();
        this.app.use(compression());
        this.httpServer = createServer(this.app);
    }

    private async configApolloExpress() {

        const schema: GraphQLSchema = makeExecutableSchema({typeDefs,resolvers });
        const apolloServer = new ApolloServer({
            schema,
            introspection: true
        });
        await apolloServer.start();
        apolloServer.applyMiddleware({app: this.app, cors: true})
    }

    private configRoutes(){
        this.app.get("/hello", ( _, res ) => {
            res.send("Bienvenidos al proyecto");
        });
        //redicreccionamos haccia /graphql para entrar en su playground
        this.app.get("/", ( _, res ) => {
            res.redirect("/graphql");
        });
    }

    listen(callback: (port: number) => void ): void {
        this.httpServer.listen(+this.DEFAULT_PORT, () => {
            callback(+this.DEFAULT_PORT)
        })
    }

    

}

export default GraphQLServer;