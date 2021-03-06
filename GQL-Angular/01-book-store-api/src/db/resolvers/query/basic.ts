
import { IResolvers } from "@graphql-tools/utils";

const queryBasicResolvers: IResolvers = {
    Query: {
        hello: () => "Hola a la API de GraphQL",
        helloWithName: (_: void, args: { name: string }, context: any, info: object) => {
            console.log(info);
            return `Hola ${args.name }`
        },
        peopleNumber: () => 5,
    }
}

export default queryBasicResolvers;