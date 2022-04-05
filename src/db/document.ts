export type usersTypes = "adminAdmin" | "userAdmin" | "user" | "funeral"

export interface IUsers {
    type: Array<usersTypes>;
    name: string;
    firstName: string;
    email: string;
}