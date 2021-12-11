import { IUser } from "./IUser";



export interface IResult {
    status: boolean;
    message: string;
    data?: IUser;
}

