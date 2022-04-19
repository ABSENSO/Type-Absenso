export interface IDataFrontUploadStock {
    id?: number;
    label_id: string;
    product_id: string;
}

export interface IDataFrontCreateKit {
    products: Array<string>;
    idBox: string;
}

export interface IDataFrontTransfer {
    idFuneral: {
        funeral: string;
    },
    ids: Array<string>;
    collection: string;
}

export interface IDataFrontLinkStockOrKit {
    collection: string;
    products: Array<string> | undefined;
    death: string;
}