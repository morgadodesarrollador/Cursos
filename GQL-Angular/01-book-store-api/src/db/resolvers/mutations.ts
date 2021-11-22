
import { IResolvers } from "@graphql-tools/utils";
import { IBook } from '../../interfaces/IBook';

const mutationsResolvers: IResolvers = {
    Mutation: { //tipo raiz
        addBook: (_:void, args: {book: IBook}): boolean => {
            console.log(args.book);
            return true;
        }
        //especificamos todas las definiciones de mutaions.ts
        /*
        addBook(id: ID!): Boolean
        updateBook(id: ID!): Boolean
        deleteBook(id: ID): Boolean
        */
    }
}

export default mutationsResolvers;