import { IResolvers } from "@graphql-tools/utils";
import data from "../data";

// resolvemos los tipos de datos de las uniones
const typesResolvers: IResolvers = {
  DataBD: {
    __resolveType(obj: { name: string, isbn: string }) {
      // Only Author has a name field
      if (obj.name) {
        return "People";
      }
      // Only Book has a title field
      if (obj.isbn) {
        return "Book";
      }
      return null; // GraphQLError is thrown
    },
  },
  People: {
   // booksBuy:  (root: object) => { //objeto completo id, name, books ...
    booksBuy:  (root: {books: Array<string>}) => {
        //console.log(root.books)
        const result = data.books.filter(
            (book) => root.books.indexOf(book.id) > -1 )
        return result;
    }
  }
};

export default typesResolvers;