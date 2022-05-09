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
    coverPicture: "default" | string;
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
    description: null | string;
    numberOfMemories: number;
    numberOfCandlePurchases: number;
    numberOfThoughtsSend: number;
    numberOfBouquetsLaid: number;
    numberOfTestimoniesLeft: number;
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

export interface IPost<D, T> {
    user: D;
    deceased: D;
    date: T;
    type: "video" | "pictures" | "default" | "litCandle" | "placedBouquet" | "buyProduct";
    media: null | string;
    description: string;
    dateOfRemembrance: T;
}

export interface IComments<D, T> {
    user: D;
    date: T;
    comment: string;
}

export interface ILikes<D, T> {
    user: D;
    date: T;
}

export interface INotification<D, T> {
    userGiving: D;
    link: string;
    type: "comment" | "like" | "follow";
    date: T;
    hasBeenSeen: boolean;
}