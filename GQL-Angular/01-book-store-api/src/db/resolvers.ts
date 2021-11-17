


const resolvers = {
    Query: {
        hello: () => "Hola a la API de GraphQL",
        helloWithName: (_: void, args: { name: string }, context: any, info: object) => {
            console.log(info);
            return `Hola ${args.name }`
        },
        peopleNumber: () => 5
    }
}


module.exports = resolvers;