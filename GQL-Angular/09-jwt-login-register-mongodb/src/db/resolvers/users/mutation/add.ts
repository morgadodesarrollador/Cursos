import { IResolvers } from "@graphql-tools/utils";
import { Db } from "mongodb";
import { IUser } from "../../../interfaces/IUser";
import { IResult } from "../../../interfaces/IResult";
import  bcrypt  from "bcrypt";
import JWT from "../../../../lib/jwt";

const mutationResolvers: IResolvers = {
    Mutation: { 
        // root, parametros de entrada, contexto de la bd retornado
        add: async(_: void, args: { user: IUser }, context: { db: Db } ): Promise<IResult> => {
            //console.log(context.db);
            //usaurio existe
            const userCheck = await context.db.collection("users").findOne({email: args.user.email});
            if (userCheck){
                return {
                    status: false,
                    message: 'El email existe y no puede usarse'
                };
            }
            if (!args.user.password){
                return {
                    status: false,
                    message: 'El password no puede ser vacio'
                };
            }
            //devuelve el id del último usuario creado      
            const lastId = await context.db.collection("users")
                .find().limit(1).sort({registerDate: -1}).toArray();
            // comprobar si existe el usuario en la BD con el mismo email. Si existe mostrar error
            args.user.id = (lastId.length === 0) ? "1" : String(+lastId[0].id + 1);
            args.user.registerDate = new Date().toISOString();
            //encriptar el password
            args.user.password = bcrypt.hashSync(args.user.password, 10);

            //insertar el usuario en la BD
            return await context.db.collection("users").insertOne(args.user)
                .then( (data) => {
                    return {
                        status: true,
                        message: 'El usuario ha sido insertado',
                        data: args.user
                    };
                })
                .catch( (error) => {
                    return {
                        status: false,
                        message: `Error: ${ error }`,
                    };
                });
        },
        update: async(_: void, args: { user: IUser }, context: { db: Db, token: string }): Promise<IResult> => {
            //verificar el token para poder actualizar
            const info = new JWT().verify(context.token);
            if (info === "Token invalido"){
                return {
                    status: false,
                    message: "token invalido o caducados",    
                }
            }
            //verificar que el usuario existe
            const userData: IUser = await context.db.collection("users").findOne({ id: args.user.id}) as IUser;
            if (!userData){
                return {
                    status: false,
                    message: "el usuario no se puede actualizar, no existe"
                }
            }
            //modificar la info sie el usuario existe
            //el password Y FECHA DE REGISTRO no lo modificamos aqui y lo dejamos como esta
            args.user = Object.assign(args.user, { password: userData.password, registerDate: userData.registerDate});
            return await context.db.collection("users")
                    .updateOne({id: args.user.id},{$set: args.user} )
                .then( (data) => {
                    console.log("actualizado correctamente");
                    return {
                        status: true,
                        message: 'El usuario ha sido actualizado correctamente',
                        data: args.user
                    };
                })
                .catch( (error) => {
                    return {
                        status: false,
                        message: `Error: No actualizadio ${ error }`,
                    };
                });
        }

    }
}

export default mutationResolvers;