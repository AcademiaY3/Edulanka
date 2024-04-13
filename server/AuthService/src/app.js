import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import corsOption from "./Config/CorsConfig.js";
import logger from "./Logs/logger.js";
import ValidateToken from "./MiddleWare/RabbitClient/ValidateToken.js";
import response from "./Utils/ResponseHandler/ResponseHandler.js";
import HttpType from "./Utils/Constants/HttpTypes.js";
import ResTypes from "./Utils/Constants/ResTypes.js";

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8600

app.use(cors(corsOption))
app.use(express.json())
app.use(logger)
ValidateToken()

app.get('/', (req, res) => {
    return response(res, 200, HttpType.getStatus(200), ResTypes.successMessages.server_online)
})


app.use((req, res) => {
    return response(res, 404, HttpType.getStatus(404), ResTypes.errors.not_found)
})

app.listen(PORT, () => {
    console.log(`Auth Server is listening on ${PORT}`);
})