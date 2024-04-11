
import { NextFunction, Request, Response } from 'express'
import app from './src/app'
import { config } from './src/config/config'
import connectDB from './src/config/db'
import createHttpError, { HttpError } from 'http-errors'


const startServer = async() =>{
    await connectDB()

    const port = config.port || 3000

    app.listen(port, ()=>{
       
        console.log(`server is running ${port}`);
        
    })
}


startServer()


