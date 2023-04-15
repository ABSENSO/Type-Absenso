export interface IDataFrontMail {
    to: string,
    subject: string,
    text: string,
    template?: {
        templateId: string;
        dataTemplate: {[x:string]: string}
    }
}

export interface IDataContact {
    name: string;
    email: string;
    phone: string;
    question: string;
}