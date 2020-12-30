const express = require('express');
const helmet = require('helmet');
const gzip = require('express-static-gzip');
require('dotenv').config({path: __dirname + `.env.${ process.env.NODE_ENV }`})

const app = express()
app.use('/static', gzip(__dirname + '/static'))
app.use('/upload', gzip(__dirname + '/upload'))
app.use(helmet())

app.get('/', ((req, res) => {
  res.send('Hello world')
}))

app.listen(process.env.PORT)
