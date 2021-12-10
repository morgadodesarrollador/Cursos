
import { IResolvers } from "@graphql-tools/utils";
import { IResult } from "../interfaces/IResult";
import { IUser } from "../interfaces/IUser";

const queryResolvers: IResolvers = {
    Query: {
        users: () : Array<IUser> => {
            return [
                {
                    id: "1",
                    name: "Jose",
                    lastname: "morgado",
                    email: "moragdo@gmail.com",
                    password: "1234",
                    registerDate: ""
                }
            ];
        }
    }
}

export default queryResolvers;