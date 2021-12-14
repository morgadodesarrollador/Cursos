import { IUser } from "./IUser";



export interface IResult {
    status: boolean;
    message: string;
    data?: IUser;
}
export interface IResultToken {
    status: boolean;
    message: string;
    token?: string;
}


