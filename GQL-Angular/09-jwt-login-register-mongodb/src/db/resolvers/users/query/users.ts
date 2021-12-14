import { IResolvers } from "@graphql-tools/utils";
import { IUser } from "../../../interfaces/IUser";
import { Db } from "mongodb";
import { IResult, IResultToken } from "../../../interfaces/IResult";
import bcrypt from "bcrypt";
import JWT from "../../../../lib/jwt";
const queryResolvers: IResolvers = {
    Query: {
        users: async(_: void, __:unknown, context: { db: Db }) : Promise <Array<IUser>> => {
            const users = await context.db.collection("users").find().toArray() as Array<IUser>; 
            console.log(users);
            return users;
        },
        login: async(_: void, args: { email: string, password: string }, context: { db: Db }): Promise<IResultToken> =>  {
            console.log(args);
            // si existe el usuario
            return await context.db.collection("users").findOne(
                { email: args.email }
            ).then( (userD) => {
                console.log(userD);
                if (!userD) {
                    return {
                        status: true,
                        message: 'Usuario No existe. Verifica el email'
                    };
                }
                // delete userD?._id;
               //comprobamos el password encriptado 
                if (!bcrypt.compareSync(args.password, userD.password)){
                    return {
                        status: true,
                        message: 'El password no es correcto',
                    };
                }
                return {
                    status: true,
                    message: 'Usuario cargado',
                    token: new JWT().sign(userD as IUser, 60 )
                };
            }).catch( (error) => {
                return {
                    status: false,
                    message: `error Usuario ${error} no cargado `,
                };
            });
        }
    },
}

export default queryResolvers;