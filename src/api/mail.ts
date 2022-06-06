export interface IDataFrontMail {
    to: string,
    subject: string,
    text: string,
    template?: {
        templateId: string;
        dataTemplate: {[x:string]: string}
    }
}