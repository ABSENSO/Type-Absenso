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
    pictures?: null | string;
    description?: string | null;
}

export interface IDataFrontUserSignup {
    email: string;
    firstName: string;
    name: string;
    sexe: TSexe;
    phone: string;
    dateOfBirth: Date;
    pictures: TPictures;
    password?: string;
    uidGoogle?: string;
}

export interface IDataFrontResetPassword {
    email: string;
}

export interface IDataResResetPassword {
    message: string;
    code?: "auth/email-not-found" | "auth/invalid-email"
}