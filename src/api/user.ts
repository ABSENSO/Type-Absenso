import { usersTypes } from "../db/document";

export interface IDataFrontAdminUser {
    name: string;
    firstName: string;
    email: string;
    role: usersTypes;
}