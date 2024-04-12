import mongoose from "mongoose";
import { BookTypes } from "./bookTypes";


const bookSchema = new mongoose.Schema<BookTypes>({
    title:{
        type:String,
         required:true,
    },
    author:{
        type:mongoose.Schema.ObjectId,
        required:true
    },
    coverImage:{
        type:String,
        required:true,
    },
    file:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },


}, {timestamps:true})

const Book = mongoose.model<BookTypes>('book', bookSchema)

export default Book