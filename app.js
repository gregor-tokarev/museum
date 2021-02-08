// imports
const express = require('express')
const helmet = require('helmet')
const gzip = require('express-static-gzip')
const path = require('path')
const { connect } = require('./util/dbConnection')
require('dotenv').config()

const adminRouter = require('./router/admin')
const commonRtouter = require('./router/common')

// configure express app
const app = express()
app.use('/static', gzip(__dirname + '/static'))
app.use('/upload', gzip(__dirname + '/upload'))
app.use(helmet())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/pages'))

// routes
app.get('', commonRtouter)
app.use('/admin', adminRouter)

// connect to database and run app
connect()
    .then(() => {
        return app.listen(process.env.PORT)
    })
    .then(() => {
        console.log(`App is running on port: ${ process.env.PORT }`)
    })
