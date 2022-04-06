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