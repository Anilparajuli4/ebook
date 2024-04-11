import express, { NextFunction, Request, Response } from 'express'
import createHttpError from 'http-errors'
import { globalErrorHandler } from './middleware/globalErrorHandler'

const app = express()

app.get('/', (req:Request, res:Response, next:NextFunction)=>{
    const error = createHttpError(400, "something went wrong") 
    throw error
    res.json({message: "welcome to the"})
})



app.use(globalErrorHandler)

export default app;