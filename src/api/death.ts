export interface IDataFrontUpdateDeath {
    type: "description" | "profilePicture" | "coverPicture";
    idDeath: string;
    newData: string;
}