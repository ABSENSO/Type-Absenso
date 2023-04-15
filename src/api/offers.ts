import { IDataFrontCreateDeceased } from "./death";
import { IDataFrontCloseOrder } from "./order";

export interface IDataFrontOffer {
    uid: string;
    name: string;
}

export interface IDataFrontCreateOffers<D, T> {
    offers: Array<IDataFrontOffer>;
    death?: IDataFrontCreateDeceased<D, T>;
    funeral?: IDataFrontCloseOrder['funeral'],
    deliveryData?: IDataFrontCloseOrder['deliveryData'],
    idDeathAlreadyExist?: string;
}