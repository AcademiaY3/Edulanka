import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import corsOption from "./Config/CorsConfig.js";
import logger from "./Logs/logger.js";
import proxy from 'express-http-proxy'
import TokenWare from "./MiddleWare/RabbitClient/TokenWare.js";
import response from "./Utils/ResponseHandler/ResponseHandler.js";
import ResTypes from "./Utils/Constants/ResTypes.js";
import checkHeaders from "./Middleware/CheckHeaders/CheckHeaders.js";


dotenv.config()
const app = express()
const PORT = process.env.PORT || 8500

app.use(cors(corsOption))
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
    return response(res, 200, ResTypes.successMessages.server_online)
})

// proxies
app.use('/auth', checkHeaders, TokenWare, proxy(process.env.auth_service_route))

//not found route
app.use((req, res) => {
    return response(res, 404, ResTypes.errors.not_found)
})

app.listen(PORT, () => {
    console.log(`Gateway is listening on ${PORT}`);
})
