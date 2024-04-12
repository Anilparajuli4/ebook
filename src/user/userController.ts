import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import User from "./userModel";
import bcrypt from 'bcrypt'
import {sign} from 'jsonwebtoken'
import { config } from "../config/config";



const createUser = async(req:Request, res:Response, next:NextFunction)=>{
  
  
  const {name, email, password} = req.body;

  if(!name || !email || !password){
    const error = createHttpError(400, "All fields are required")
    return next(error)
  }
  const user = await User.findOne({email})
  if(user){
    const error = createHttpError(400, 'user alerady exists with this email')
    return next(error)
  }

   const hashPassword = await bcrypt.hash(password, 10)
   const newuser = await User.create({
    name,
    email,
    password:hashPassword
   })

   const token = sign({sub:newuser._id}, config.jwtsecret as string, {expiresIn:'7d'})


res.json({accessToken:token})
}


export {createUser};