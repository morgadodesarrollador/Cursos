import { IResolvers } from "@graphql-tools/utils";
import data from "../../data";

// resolvemos los tipos de datos de las uniones
const typesPeopleResolvers: IResolvers = {

  People: { //typoe object People
    // booksBuy:  (root: object) => { //objeto completo id, name, books ...
    booksBuy: (root: { books: Array<string> }) => {
      //console.log(root.books)
      const result = data.books.filter(
        (book) => root.books.indexOf(book.id) > -1
      );
      return result;
    },
    website: (root: { website: string }) => {
      return root.website === undefined ? "" : root.website;
    },
    twitter: (root: { twitter: string }) => {
      return root.twitter === undefined
        ? ""
        : `https://twitter.com/${root.twitter}`;
    },
    github: (root: { github: string }) => {
      return root.github === undefined
        ? ""
        : `https://github.com/${root.github}`;
    },
  },
  
};

export default typesPeopleResolvers;
