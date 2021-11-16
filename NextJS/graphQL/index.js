const { ApolloServer } = require('apollo-server');
/*server. Al crear un servidor de Apollo se requiere: 
- definir un esquema con un typeQuery y un resolver que satisfaga ese Query
  esquema, query, resolvers, mutaciones
*/

//schema, Lo importamos
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const conectarDB = require('./config/db');
//conectar a la BD
conectarDB();
//servidor
const server = new ApolloServer({typeDefs,resolvers });
//arrancar el servidor
server.listen().then( ({url}) => {
    console.log (`Servidor listo en la URL ${url}`)
})