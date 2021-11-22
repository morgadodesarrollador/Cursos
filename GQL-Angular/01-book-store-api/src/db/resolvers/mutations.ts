import { IResult } from './../../interfaces/IResult';

import { IResolvers } from "@graphql-tools/utils";
import { IBook } from '../../interfaces/IBook';
import data from '../data';

const mutationsResolvers: IResolvers = {
    Mutation: { //tipo raiz
        addBook: (_:void, args: {book: IBook}): IResult => {
            console.log(args.book);
            //generamos el id automático
            const idValue = +data.books[data.books.length-1].id;
            args.book.id = String(idValue);
            (data.books as IBook[]).push(args.book);
            return {
                status: true,
                message: `Libro con el título ${args.book.title} ha sido añadido correctamente`,
                item: args.book
            };
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