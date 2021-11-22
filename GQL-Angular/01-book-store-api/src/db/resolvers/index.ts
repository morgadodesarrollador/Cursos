import queryResolvers from "./query";
import typesResolvers from "./types";
import mutationsResolvers from "./mutations";
    
// añadimos todos los reseolvers que tenemos
const resolverIndex = { 
    ...queryResolvers,
    ...typesResolvers,
    ...mutationsResolvers
}

export default resolverIndex;