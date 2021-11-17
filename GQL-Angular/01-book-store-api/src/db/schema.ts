import { gql } from 'apollo-server-express';

const typeDefs = gql`
    #comentarios en GrpahQL
    type Query{
        hello: String!
        helloWithName(name: String):String!
        peopleNumber: Int!
    }

`;


module.exports = typeDefs;