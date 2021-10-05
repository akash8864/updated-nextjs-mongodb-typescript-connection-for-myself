import { Document } from "mongoose";
type Person = {firstName: string, lastname?:string}
export interface IUser extends Document {
    name:Person,
    shortName:string,
    image:string,
    skills:string,
    status:string,
    role:string,
    lasActivity:Date,
    projects:string,
    createdBy:string,
    createdAt:Date,
    updatedBy:string,
    updatedAt:Date
}