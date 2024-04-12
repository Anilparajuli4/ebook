import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import User from "./userModel";
import bcrypt from 'bcrypt'
import {sign} from 'jsonwebtoken'
import { config } from "../config/config";
import { userType } from "./userType";




const createUser = async(req:Request, res:Response, next:NextFunction)=>{
  
  
  const {name, email, password} = req.body;

  if(!name || !email || !password){
    const error = createHttpError(400, "All fields are required")
    return next(error)
  }


  try {

    const user = await User.findOne({email})
    if(user){
      const error = createHttpError(400, 'user alerady exists with this email')
      return next(error)
    }
    
  } catch (error) {
    return next(createHttpError(500, 'Error while getting user'))
  }

   const hashPassword = await bcrypt.hash(password, 10)
   let newuser:userType
   try {

    newuser = await User.create({
      name,
      email,
      password:hashPassword
     })
  

   } catch (error) {
    return next(createHttpError(500, "Error while creating user"))
   }
 
try {
  const token = sign({sub:newuser._id}, config.jwtsecret as string, {expiresIn:'7d'})
  res.json({accessToken:token})
} catch (error) {
  return next(createHttpError(500, 'Error while signing the jwt token'))
}
  
 


}


export {createUser};