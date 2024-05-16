import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import corsOption from "./Config/Cors/CorsConfig.js";
// import logger from "./Logs/logger.js";
import response from './Utils/ResponseHandler/ResponseHandler.js'
import db from "./Config/Connection/db.js";
import OrderRoute from './Routes/Order/OrderRoute.js'
import PayListener from "./MiddleWare/RabbitMq/PayListener.js";

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8900

app.use(cors(corsOption))
app.use(express.json())
// app.use(logger)

app.get('/', (req, res) => {
    return response(res, 200,{message:'order service online'})
})

//routes init
app.use('/service',OrderRoute)

app.use('/*',(req, res) => {
    return response(res, 404, { message:'route not found'})
})

app.listen(PORT, () => {
    db()
    PayListener()
    console.log(`Order Server is listening on ${PORT}`);
})