import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.SERVICE_MONGO_URI;
const db = async () => {
    try {
        mongoose.connect(URL);
        const { connection } = mongoose;
        connection.once("open", () => {
            console.log("Connected To Course DB");
        })
    } catch (error) {
        console.log("Error Connecting DB " + error);
    }
}

export default db;