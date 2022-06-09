import { TSexe } from "..";
import { TPictures } from "./user";

export interface IDataFrontUpdateDeath {
    type: "description" | "profilePicture" | "coverPicture" | "link";
    idDeath: string;
    newData: string;
}

export interface IDataFrontAddAdmin<T> {
    idDeath: string;
    idUser?: string;
    userNotExist?:{ 
        email: string;
        name: string;
        firstname: string;
        phone: string;
        dateOfBirth: T;
        pictures: TPictures;
        sexe: TSexe;
    }
}