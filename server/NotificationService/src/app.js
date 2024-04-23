import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import corsOption from "./Config/Cors/CorsConfig.js";
import logger from "./Logs/logger.js";
import response from "./Utils/ResponseHandler/ResponseHandler.js";
import ResTypes from "./Utils/Constants/ResTypes.js";
import db from "./Config/Connections/db.js";
import NotiListener from "./MiddleWare/RabbitClient/NotiListener.js";

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8700

app.use(cors(corsOption))
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
    return response(res, 200,ResTypes.successMessages.server_online)
})

//routes init
// app.use('/service',AuthRoute)

app.use((req, res) => {
    return response(res, 404,ResTypes.errors.not_found)
})

app.listen(PORT, () => {
    db()
    NotiListener()
    console.log(`Notification Server is listening on ${PORT}`);
})