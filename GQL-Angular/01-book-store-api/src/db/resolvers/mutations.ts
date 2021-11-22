
import { IResolvers } from "@graphql-tools/utils";

const mutationsResolvers: IResolvers = {
    Mutation: { //tipo raiz
        //especificamos todas las definiciones de mutaions.ts
        /*
        addBook(id: ID!): Boolean
        updateBook(id: ID!): Boolean
        deleteBook(id: ID): Boolean
        */
    }
}

export default mutationsResolvers;