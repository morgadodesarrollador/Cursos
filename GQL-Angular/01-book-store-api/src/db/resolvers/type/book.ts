import { IResolvers } from "@graphql-tools/utils";
import data from "../../data";

// resolvemos los tipos de datos de las uniones
const typesBookResolvers: IResolvers = {
  Book: { //type object Book
    // booksBuy:  (root: object) => { //objeto completo id, name, books ...
    byPeoplesBuy: (root: { id: string }) => {
      //console.log(root.books)
      const result = data.people.filter(
        //itera en cada people
        (people) => people.books.indexOf(root.id) > -1
      ); // si existe ese id en people.books
      return result;
    },
    publishedDate: (root: { publishedDate: string }) => {
      return root.publishedDate === undefined ? "?" : root.publishedDate;
    },
    thumbnailUrl: (root: { thumbnailUrl: string }) => {
      return root.thumbnailUrl === undefined ? "?" : root.thumbnailUrl;
    },
    shortDescription: (root: { shortDescription: string }) => {
      return root.shortDescription === undefined ? "?" : root.shortDescription;
    },
    longDescription: (root: { longDescription: string }) => {
      return root.longDescription === undefined ? "?" : root.longDescription;
    },
  },
};

export default typesBookResolvers;
