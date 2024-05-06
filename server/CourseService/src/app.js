import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import corsOption from "./Config/Cors/CorsConfig.js";
// import logger from "./Logs/logger.js";
import response from './Utils/ResponseHandler/ResponseHandler.js'
import db from "./Config/Connections/db.js";
import Courseroute from './Routes/Course/CourseRoute.js'


dotenv.config()
const app = express()
const PORT = process.env.PORT || 8800

app.use(cors(corsOption))
app.use(express.json())
// app.use(logger)

app.get('/', (req, res) => {
    return response(res, 200,{message:'course service online'})
})

//routes init
app.use('/service',Courseroute)

app.use('/*',(req, res) => {
    return response(res, 404, { message:'route not found'})
})

app.listen(PORT, () => {
    db()
    console.log(`Course Server is listening on ${PORT}`);
})