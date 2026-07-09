// import dotenv from "dotenv";
import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
// dotenv.config();
const connectDB = async ()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB_Host:${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("ERROR:There is an error in Db/index.js");
        process.exit(1);
    }
}

export default connectDB;