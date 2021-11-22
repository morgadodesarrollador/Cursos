import { IResult } from './../../interfaces/IResult';

import { IResolvers } from "@graphql-tools/utils";
import { IBook } from '../../interfaces/IBook';
import data from '../data';

const mutationsResolvers: IResolvers = {
    Mutation: { //tipo raiz
        addBook: (_:void, args: {book: IBook}): IResult => {
            console.log(args.book);
            //validamos si el título es único
            if (data.books.filter((value) => value.title === args.book.title).length > 0) {
                return {
                    status: false,
                    message: `Libro con el título ${args.book.title} ya existe`
                };
            }
            //generamos el id automático
            const idValue = Number(data.books[data.books.length-1].id) + 1;
            args.book.id = String(idValue);
            (data.books as IBook[]).push(args.book);
            return {
                status: true,
                message: `Libro con el título ${args.book.title} ha sido añadido correctamente`,
                item: args.book
            };
        },
        updateBook: (_:void, args: {book: IBook}): IResult => {
            //vemos si el libro existe
            let encontrado = false;
            for (let i = 0; (i < data.books.length) && !encontrado; i++) {
                if (data.books[i].id === args.book.id){
                    (data.books[i] as IBook) = args.book;
                    encontrado = true;
                    //break;
                }
            }
            //actualizamos el libro
            return {
                status: true,
                message: `Libro ${args.book.title} actualizado correctamente`,
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