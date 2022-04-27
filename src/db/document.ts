import { TPictures, TSexe } from "../api/user";

export type usersTypes = "adminAdmin" | "userAdmin" | "user" | "funeral"

export interface IUsers<D> {
    type: Array<usersTypes>;
    name: string;
    firstName: string;
    email: string;
    phone: string;
    sexe: TSexe;
    dateOfBirth?: D;
    pictures?: TPictures;
}

export interface IFuneralCompany<T> {
    authorizedUser: Array<T>;
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
    phone: string;
}

export interface IGeolocation {
    lat: number;
    lng: number;
    hash: string;
}

export interface IDeath<D, T> {
    admin: Array<D | "absenso">;
    profilePicture: string;
    name: string;
    firstName: string;
    fullname: string;
    lastAddress: string;
    geoLocation: IGeolocation;
    nOfCandlesOrdered: number;
    dateOfBirth: T;
    dateOfDeath: T;
    createAt: T;
    createBy: D;
}

export interface IProduct {
    id?: string;
    name: string;
    price: number;
}

export interface IStock<D> {
    product: D;
    idLabel: string;
    deceased?: D;
    place: D | "absenso";
}

export interface IKit<D> {
    products: Array<D>;
    place: D | "absenso";
    deceased?: D;
    funeral?: D;
}

export interface IOrderCandles<T, D> {
    deliveryAddress: string;
    product: D;
    numberOfOrders: number;
    date: T;
    postalCodeDelivery: string;
    purchaser: D;
    deceased?: D | null;
    deliveryCity: string;
    deliveryCountry: string;
    firstName: string;
    linkDeceased: boolean;
    name: string;
}