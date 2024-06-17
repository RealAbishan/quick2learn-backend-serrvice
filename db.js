import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const Connection = async () => {
    try {
        const MONGO_URL = "mongodb+srv://builders:BaveeAbi1209@builders.tgaow.mongodb.net/Quick2Learn"
        mongoose.connect(MONGO_URL)
        console.log("Connected")
    } catch(err) {
        console.log("Error: " + err)
    }
}

Connection()