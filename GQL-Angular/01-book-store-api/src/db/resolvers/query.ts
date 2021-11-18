
import { IResolvers } from "@graphql-tools/utils";
import { IBook } from "../../interfaces/IBook";
import { IPeople } from '../../interfaces/IPeople';
import data from "../data";

const queryResolvers: IResolvers = {
    Query: {
        hello: () => "Hola a la API de GraphQL",
        helloWithName: (_: void, args: { name: string }, context: any, info: object) => {
            console.log(info);
            return `Hola ${args.name }`
        },
        peopleNumber: () => 5,
        bookList: (): Array<IBook> => {
            return data.books;
        },
        peopleList: (): Array<IPeople> => {
            return data.people;
        },
        book: (_: void, args: {id: string}) => {
            console.log(data.books.filter(
                (value) => value.id === args.id
            ));
            return data.books.filter(
                (value) => value.id === args.id
            )[0]
        },
        people: (_: void, args: {id: string}) => {
            return data.people.filter(
                (value) => value.id == args.id
            )[0]
        }

    }
}

export default queryResolvers;