import mongoose from "mongoose";
import { userType } from "./userType";


const userSchema = new mongoose.Schema<userType>({
    name:{
        type:String,
        requires:true
    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    password:{
        type:String,
        require
    }
},{timestamps:true})

const User = mongoose.model<userType>('user', userSchema)

export default User