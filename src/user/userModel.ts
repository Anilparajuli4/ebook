import mongoose from "mongoose";
import { User } from "./userType";

const userSchema = new mongoose.Schema<User>({
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

const User = mongoose.model<User>('user', userSchema)

export default User