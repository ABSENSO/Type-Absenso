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

export interface IDataReceivePaymentOrder {
    id: string;
    url: string;
}

export interface IDataFrontCloseOrder {
    idOrderOffer: string;
    funeral?: string;
    deliveryData?: {
        firstName: string;
        name: string;
        email: string;
        phone: string;
        deliveryAddress: string;
        deliveryCity: string;
        deliveryPostalCode: string;
        deliveryCountry: string;
        sameDeliveryAndBilling: boolean;
        billingAddress?: string;
        billingCity?: string;
        billingPostalCode?: string;
        billingCountry?: string;
    }
}