import { usersTypes } from "../db/document";

export interface IDataFrontAdminUser {
    name: string;
    firstName: string;
    email: string;
    role: usersTypes;
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