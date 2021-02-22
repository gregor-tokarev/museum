// imports
import express from 'express'
import helmet from "helmet";
import gzip from 'express-static-gzip'
import path from 'path'
import {connect} from './util/dbConnection'
import env from 'dotenv'

env.config()

import adminRouter from './router/admin'
import commonRouter from './router/common'

// configure express app
const app = express()
app.use('/static', gzip(__dirname + '/static', {}))
app.use('/upload', gzip(__dirname + '/upload', {}))
app.use(helmet())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/pages'))

// routes
app.get('', commonRouter)
app.use('/admin', adminRouter)

// connect to database and run app
connect()
    .then(() => {
        return app.listen(process.env.PORT)
    })
    .then(() => {
        console.log(`App is running on port: ${process.env.PORT}`)
    })
