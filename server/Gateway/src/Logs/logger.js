import { createLogger, transports, format } from 'winston'
import { v4 as uuid } from 'uuid'
import {MongoDB} from 'winston-mongodb'

const logger = (req, res, next) => {
    const clientIp = req.ip || req.connection.remoteAddress
    const id = uuid()

    const gatewayLogger = createLogger({
        level: 'info',
        // add format.metadata() to include the aditional needed fields
        format: format.combine(format.timestamp(),format.metadata() ,format.json()),
        defaultMeta: {
            service: 'gateway-service',
            id,
            method: req.method,
            clientIp,
            origin: req.headers.origin,
            url: req.url,
            protocol: req.protocol,
            host: req.get('host'),
            path: req.path,
            query: req.query,
            cookies: req.cookies,
            headers: req.headers,
            // statusCode: res.statusCode,
            userAgent: req.get('User-Agent')
        },
        transports: [
            new transports.File({
                filename: 'gateway.log'
            }),
            new transports.MongoDB({
                db: process.env.MONGO_URI,
                options: {
                    useUnifiedTopology: true
                },
                collection: 'logs'
            })
        ],
    })
    gatewayLogger.info()

    next()

}

export default logger