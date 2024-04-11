import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";

export const globalErrorHandler=(err:HttpError, req:Request, res:Response, next:NextFunction)=>{{
    const statuscode = err.statuscode || 500;
  
    return res.status(statuscode).json({
      message:err.message,
      errorStack: config.env === 'development' ? err.stack : null,
  
    })
  }}
  
