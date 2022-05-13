export {collections} from "./db/collection";

export {
    usersTypes,
    IUsers,
    IFuneralCompany,
    IDeath,
    IGeolocation,
    IProduct,
    IStock,
    IKit,
    IOrderCandles,
    IPost,
    IComments,
    ILikes,
    INotification,
    IFollow,
    IPayment,
} from "./db/document";
export {
    IDataFrontAdminUser,
    IDataFrontFuneralUser,
    TSexe,
    IDataFrontUserSignup,
} from "./api/user";
export {IDataFrontMail} from "./api/mail";
export {
    IDataFrontUploadStock,
    IDataFrontCreateKit,
    IDataFrontTransfer,
    IDataFrontLinkStockOrKit
} from "./api/stock";
export {
    IDataFrontOrderCandles
} from "./api/orderCandles";
export {
    IDataFrontDeleteLikes
} from "./api/likes";
export {
    IDataFrontDeleteFollow
} from "./api/follow";
export {
    IDataFrontOrderProduct,
    IDataReceiveOrderProduct
} from "./api/order";
export {
    router
} from "./router";