import express, { NextFunction, Request, Response } from 'express'
import createHttpError from 'http-errors'
import bodyParser from 'body-parser';
import { globalErrorHandler } from './middleware/globalErrorHandler'
import useRouter from './user/userRouter'
import bookRouter from './book/bookRouter';

const app = express()
app.use(express.json())
// app.use(bodyParser.json())

app.get('/', (req:Request, res:Response, next:NextFunction)=>{
    try {
        // const error = createHttpError(400, "something went wrong");
        // throw error; // You might want to handle this differently based on your logic.
        res.json({ message: "welcome to the" });
    } catch (err) {
        next(err); // Pass the error to the global error handler
    }
})


app.use('/api/users', useRouter)
app.use('/api/book', bookRouter)
app.use(globalErrorHandler)

export default app;