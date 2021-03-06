import { IProduct } from "../db/document";

export interface IDataFrontOrderProduct<D, T> {
    email: string;
    firstName: string;
    name: string;
    deliveryAddress: string;
    deliveryCity: string;
    deliveryPostalCode: string;
    deliveryCountry: string;
    products: Array<{
        product: IProduct;
        qte: number;
    }>;
    deathId: string;
    total: number;
    date: T;
}

export interface IDataReceiveOrderProduct {
    id: string;
    url: string;
}