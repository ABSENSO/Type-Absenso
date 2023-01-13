import { router } from "../../router";

export interface IOfferData {
    version: string;
    price: number;
    items: Array<string>;
    uid: string;
    url: string;
}

export const offersData: Array<IOfferData> = [
    {
      uid: "43f8626b-3ff4-4e9a-b0de-e4f83338e984",
      version: "freeOffer",
      price: 0,
      // eslint-disable-next-line max-len
      items: ["1offer1text", "1offer2text", "1offer3text", "1offer4text", "1offer5text", "1offer6text", "1offer7text"],
      url: router.offer.funnelOffer0, 
    },
    {
      uid: "3f2d2c28-dd3e-482a-9dd7-bab8dae2fe76",
      version: "onlineOffer",
      price: 99,
      // eslint-disable-next-line max-len
      items: ["1offer1text", "1offer2text", "1offer3text", "1offer5text", "2offer6text", "2offer8text", "2offer9text", "2offer10text", "2offer11text", "2offer12text", "2offer13text"],
      url: router.offer.funnelOffer1,
    },
    {
      uid: "6804e2f3-e38b-4eba-b9d7-5335cbb3a342",
      version: "versionOffer3",
      price: 199,
      // eslint-disable-next-line max-len
      items: ["3offer13text", "3offer14text", "3offer15text", "3offer16text", "3offer17text", "3offer18text"],
      url: router.offer.funnelOffer2,
    },
    {
      uid: "ed8b84db-7bd7-4efc-bc54-c6ef4f55df0b",
      version: "versionOffer4",
      price: 199,
      // eslint-disable-next-line max-len
      items: ["4offer1text", "4offer2text", "4offer3text", "4offer4text", "4offer5text", "4offer6text"],
      url: router.offer.funnelOfferSupplement,
    },
    {
      uid: "085958e5-4219-410e-b1d3-25c1c40e9208",
      version: "versionOffer5",
      price: 199,
      // eslint-disable-next-line max-len
      items: ["5offer1text", "5offer2text", "5offer3text", "5offer4text", "5offer5text", "5offer6text"],
      url: router.offer.funnelOfferSupplement,
    }
  ];