
import { IResolvers } from "@graphql-tools/utils";
import { IResult } from "../../../interfaces/IResult";
import data from "../../data";

const queryPeopleResolvers: IResolvers = {
    Query: {

        peopleList: (): IResult => {
            return {
                status: true,
                message: "Listado de personas",
                list: data.people
            };
        },
        people: (_: void, args: {id: string}): IResult => {
            const peopleFind = data.people.filter(
                (value) => value.id == args.id )[0];
            return {
                status: peopleFind == undefined ? false : true,
                message: peopleFind == undefined ? 
                        `Persona ${args.id } no encontrado` : `Persona ${args.id } encontrada`,
                item: peopleFind 
            }
        }

    }
}

export default queryPeopleResolvers;