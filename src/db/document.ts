export type usersTypes = "adminAdmin" | "userAdmin" | "user" | "funeral"

export interface IUsers {
    type: Array<usersTypes>;
    name: string;
    firstName: string;
    email: string;
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
    link?: D;
    place?: D;
}

export interface IKit<D> {
    products: Array<D>;
    death?: D;
    funeral?: D;
}