
import { IResolvers } from "@graphql-tools/utils";
import { IResult } from "../../../interfaces/IResult";
import data from "../../data";

const queryBookResolvers: IResolvers = {
    Query: {

        bookList: (): IResult => {
            return {
                status: true,
                message: "Listado de libros",
                list: data.books
            };
        },
        
        book: (_: void, args: {id: string}): IResult => {
            const bookFind = data.books.filter(
                    (value) => value.id === args.id)[0];
            return {
                status: bookFind == undefined ? false : true,
                message: bookFind == undefined ? 
                        `Libro ${args.id } no encontrado` : `Libro ${args.id } encontrado`,
                item: bookFind 
            }
        }
    }
}

export default queryBookResolvers;