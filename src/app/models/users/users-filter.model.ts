export interface UsersFilter {
    userId?:number;
    pinCode?:string;
    email?:string;
    firstname?:string;
    lastname?: string;
    pageNumber?: number;
    pageSize? : number;
}