import { IResolvers } from "@graphql-tools/utils";
import data from "../../data";

// resolvemos los tipos de datos de las uniones
const typesUnionResolvers: IResolvers = {
  DataBD: { //type object DataBD
    __resolveType(obj: { name: string; isbn: string }) {
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
  
  
};

export default typesUnionResolvers;
