export interface IDataFrontUpdateDeath {
    type: "description" | "profilePicture" | "coverPicture" | "link";
    idDeath: string;
    newData: string;
}

export interface IDataFrontAddAdmin {
    idDeath: string;
    idUser: string;
}