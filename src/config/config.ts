import {config as conf} from 'dotenv'
conf()
const _config ={
   port:process.env.PORT,
   dataabaseUrl: process.env.MONGO_CONNECTION,
   env:process.env.NODE_ENV,
   jwtsecret:process.env.JWT_SECRET
}


export const config = Object.freeze(_config)