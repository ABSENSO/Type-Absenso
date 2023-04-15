import { TSexe } from "..";
import { IDeath } from "../db/document";
import { TPictures } from "./user";

export interface IDataFrontUpdateDeath {
    type: "description" | "profilePicture" | "coverPicture" | "link";
    idDeath: string;
    newData: string;
}

export interface IDataFrontUpdateProfile<D, T> {
    idDeath: string;
    data: {
        firstName: IDeath<D, T>["firstName"];
        name: IDeath<D, T>["name"];
        dateOfBirth: string;
        dateOfDeath: string;
        description: IDeath<D, T>["description"];
    }
}

export interface IDataFrontUpdateLocation<D, T> {
    idDeath: string;
    lastAddress: IDeath<D, T>["lastAddress"];
    geoLocation: IDeath<D, T>["geoLocation"];
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

export interface IDataFrontCreateDeceasedWithproduct<D, T> {
    death: IDataFrontCreateDeceased<D, T>;
    kitUid: string;
}