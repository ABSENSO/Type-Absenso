import { usersTypes } from "../db/document";

export declare type TSexe =  "woman" | "boy" | "other";

export declare type TPictures = string | "default";

export interface IDataFrontAdminUser {
    name: string;
    firstName: string;
    email: string;
    role: usersTypes;
    sexe: TSexe;
    phone: string;
}

export interface IDataFrontFuneralUser {
    name: string;
    firstName: string;
    email: string;
    phone: string;
    companyName: string;
    headOffice: string;
    postalCodeHeadOffice: string;
    cityHeadOffice: string;
    countryHeadOffice: string;
    vatNumber: string;
    deliveryAddress: string;
    postalCode: string;
    city: string;
    country: string;
}

export interface IDataFrontUserSignup {
    email: string;
    firstName: string;
    name: string;
    sexe: TSexe;
    phone: string;
    dateOfBirth: Date;
    pictures: TPictures;
}