import { IDataFrontCloseOrder, IDataFrontOrderProduct } from "../api/order";
import { TPictures, TSexe } from "../api/user";

export type usersTypes = "adminAdmin" | "userAdmin" | "user" | "funeral"
export type religionTypes = "catholic" | "muslim" | "jewish"

export interface IUsers<T> {
    type: Array<usersTypes>;
    name: string;
    firstName: string;
    email: string;
    phone: string;
    sexe: TSexe;
    dateOfBirth?: T;
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
    pictures: string | null;
    description: string | null;
}

export interface IGeolocation {
    lat: number;
    lng: number;
    hash: string;
}

export interface IDeath<D, T> {
    admin: Array<D | "absenso">;
    profilePicture: null | string;
    coverPicture: null | string;
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
    link?: string;
    funeral?: D;
    religion?: religionTypes;
    type: "free" | "paid",
    payment?: D;
    offer?: D;
}

export interface IProduct {
    id?: string;
    name: string;
    price: number;
    image: string;
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
    type: "comment" | "like" | "follow" | "post" | "addBouquet";
    date: T;
    hasBeenSeen: boolean;
    text: string | null;
}

export interface IFollow<D, T> {
    userGiving: D;
    death: D;
    date: T;
}

export interface IOrderProduct<D, T> extends Omit<
    IDataFrontOrderProduct<D, T>, "products" | "deathId"
> {
    products: Array<{
        product: D;
        qte: number;
    }>;
    deathId: D;
    payment: D;
}

export interface IBouquets<D, T> {
    userGiving: D;
    date: T;
}

export interface IScanReporting<D, T> {
    date: T;
    death: D;
    userScanned: D |  "unknown";
    type: "stock" | "kit",
    thingScanned: D;
}

export interface IOrderOffers<D, T> {
    date: T;
    user: D;
    offersUid: Array<string>;
    payment: D;
    death?: D;
    funeral?: D;
    deliveryData?: IDataFrontCloseOrder["deliveryData"];
    type: "started" | "finished";
}

export interface IPayment {
    status: "created" | "failed" | "complete";
    type: "offer" | "product";
    price: number;
}