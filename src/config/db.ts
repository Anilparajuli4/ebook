import moongose from "mongoose"
import { config } from "./config"




const connectDB = async()=>{
    try {
        moongose.connection.on('connected', ()=>{
            console.log('connected to database successfully');
            
        })
        
        moongose.connection.on('error', (err:string)=>{
            console.log('Error in connected to database', err);
            
        })
        await moongose.connect(config.dataabaseUrl as string)
      
    } catch (error) {
        console.log('failed to connect to database', error);
        process.exit(1)
    }

  
}

export default connectDB