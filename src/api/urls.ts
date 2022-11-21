const prefix = "/v1"

export const urls = {
    createUser: `${prefix}/create/user`,
    createAdminUser: `${prefix}/create/admin/user`,
    createFuneralUser: `${prefix}/create/funeral/user`,
    formatAddress: `${prefix}/format/address`,
    detailsAddress: `${prefix}/details/address`,
    sendMail: `${prefix}/send/mail`,
    deletePosts: `${prefix}/delete/posts`,
    deleteComments: `${prefix}/delete/comments`,
    deleteLikes: `${prefix}/delete/likes`,
    deleteFollow: `${prefix}/delete/follow`,
    orderProduct: `${prefix}/order/product`,
    webhookOrder: `${prefix}/webhook/order`,
    addProduct: `${prefix}/add/product`,
    addStock: `${prefix}/add/stock`,
    createKit: `${prefix}/add/stock`,
    transferStock: `${prefix}/transfer/stock`,
    transferKit: `${prefix}/transfer/kit`,
    linkProductWithDeceased: `${prefix}/link/product/deceased`,
    orderCandleFuneral: `${prefix}/order/candles/funeral`,
    updateDeceased: `${prefix}/update/deceased`,
    addAdminDeceased: `${prefix}/add/admin/deceased`,
    subscribeToAnOffer: `${prefix}/subscribe/offer`,
    createDeath: `${prefix}/create/death`,
    closeOffer: `${prefix}/close/order`
}