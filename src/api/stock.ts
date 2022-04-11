export interface IDataFrontUploadStock {
    id?: number;
    label_id: string;
    product_id: string;
}

export interface IDataFrontCreateKit {
    products: Array<string>;
    idBox: string;
}