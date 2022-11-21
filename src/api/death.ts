import { TSexe } from "..";
import { IDeath } from "../db/document";
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

export interface IDataFrontCreateDeceased<D, T> extends Omit<
    IDeath<D, T>, "admin" | "dateOfBirth" | "dateOfDeath" | "createAt" | "createBy" | "funeral" | "payment" | "offer" | "numberOfMemories" | "numberOfCandlePurchases" | "numberOfThoughtsSend" | "numberOfBouquetsLaid" | "numberOfTestimoniesLeft"
> {
    admin: Array<string>;
    dateOfBirth: string;
    dateOfDeath: string;
    funeral?: string;
    payment?: string;
    offer?: string;
}

export interface IDataResponseDeceased {
    message: string;
    uid: string;
}