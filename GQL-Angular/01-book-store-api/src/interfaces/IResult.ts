
import { IBook } from "./IBook";
import { IPeople } from "./IPeople";


export interface IResult {
    status: boolean;
    message: string;
    list?: Array<Tipos>;
    item?: Tipos;
}

type Tipos =
    | IBook
    | IPeople