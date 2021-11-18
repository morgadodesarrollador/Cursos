
import { IResolvers } from "@graphql-tools/utils";
import { IBook } from "../../interfaces/IBook";
import { IPeople } from '../../interfaces/IPeople';
import { IResult } from "../../interfaces/IResult";
import data from "../data";

const queryResolvers: IResolvers = {
    Query: {
        hello: () => "Hola a la API de GraphQL",
        helloWithName: (_: void, args: { name: string }, context: any, info: object) => {
            console.log(info);
            return `Hola ${args.name }`
        },
        peopleNumber: () => 5,
        bookList: (): IResult => {
            return {
                status: true,
                message: "Listado de libros",
                list: data.books
            };
        },
        peopleList: (): IResult => {
            return {
                status: true,
                message: "Listado de personas",
                list: data.people
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
        },
        people: (_: void, args: {id: string}): IResult => {
            const peopleFind = data.people.filter(
                (value) => value.id == args.id )[0];
            return {
                status: peopleFind == undefined ? false : true,
                message: peopleFind == undefined ? 
                        `Persona ${args.id } no encontrado` : `Persona ${args.id } encontrada`,
                item: peopleFind 
            }
        }

    }
}

export default queryResolvers;