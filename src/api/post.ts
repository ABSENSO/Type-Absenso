import { IPost } from "../db/document";

export interface IDataFrontDeletePost {
    idDeath: string;
    idPost: string;
}

export interface IDataFrontAddPost<D, T> extends Omit<
    IPost<D, T>, "user" | "deceased" | "date" | "dateOfRemembrance"
> {
    deceased: string;
    dateOfRemembrance: string;
}