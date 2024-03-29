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
    IBouquets,
    IScanReporting,
    religionTypes,
    IOrderOffers,
    IOrderProduct,
} from "./db/document";
export {
    IDataFrontAdminUser,
    IDataFrontFuneralUser,
    TSexe,
    IDataFrontUserSignup,
    IDataFrontResetPassword,
    IDataResResetPassword,
} from "./api/user";
export {IDataFrontMail, IDataContact} from "./api/mail";
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
    IDataReceivePaymentOrder,
    IDataFrontCloseOrder
} from "./api/order";
export {
    IDataFrontDeletePost,
    IDataFrontAddPost,
} from "./api/post";
export {
    IDataFrontDeleteComment
} from "./api/comment";
export {
    IDataFrontUpdateDeath,
    IDataFrontAddAdmin,
    IDataFrontCreateDeceased,
    IDataResponseDeceased,
    IDataFrontCreateDeceasedWithproduct,
    IDataFrontUpdateProfile,
    IDataFrontUpdateLocation
} from "./api/death";
export {
    IDataFrontCreateOffers
} from "./api/offers";
export { urls } from "./api/urls";
export {
    IOfferData,
    offersData
} from "./utils/asset/offers";
export {
    router
} from "./router";
export {
    verifyLink
} from "./utils/verifyLink";