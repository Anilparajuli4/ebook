import path from 'node:path'
import { NextFunction, Request, Response } from "express";
import cloudinary from "../config/cloudinary";
import { log } from 'node:util';
import createHttpError from 'http-errors';

const createBook = async(req:Request, res:Response, next:NextFunction)=>{


      const files = req.files as {[filename:string]: Express.Multer.File[]}


   

     const coverImageMimeType = files.coverImage[0].mimetype.split('/').at(-1)
     const fileName = files.coverImage[0].filename
     const filePath = path.resolve(__dirname, '../../public/data/uploads', fileName)
     
     try {
      const uploadResult = await cloudinary.uploader.upload(filePath, {
         filename_override:fileName,
         folder: 'book-covers',
         format: coverImageMimeType
      })
         
     } catch (error) {
       console.log(error);
       next(createHttpError(500, 'while uploading file'))
         

     }

 

     const bookFileName = files.file[0].filename
     const bookFilepath = path.resolve(__dirname, '../../public/data/uploads', bookFileName) 
     const bookFileUploadResult = await cloudinary.uploader.upload(bookFilepath, {
      resource_type: 'raw',
      filename_override: bookFileName,
      folder:'book-pdfs',
      format: 'pdf'
     })
     
    console.log("bookFileUploadResult",bookFileUploadResult);


    
    
    res.json({})
}

export{createBook}