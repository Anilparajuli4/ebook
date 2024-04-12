import { userType } from "../user/userType";

export interface  BookTypes{
    _id:string,
    title:string,
    author:userType,
    genre:string,
    coverImage:string,
    file:string,
    createdAt:Date,
    updatedAt:Date

}