require('dotenv').config()
const express = require ('express')
const cors = require ("cors")
const app = express()
const indexRouter = require("./routes/indexRoutes")

const database = require('./config/database')
const professionalRoutes = require('./routes/professionalRoutes')
const usersRouter = require('./routes/userRoutes')
const clientRouter = require('./routes/clientRoutes')

app.use (cors())
app.use(express.json())

app.use('/professional', professionalRoutes)
app.use('/users', usersRouter)
app.use('/client', clientRouter)

database.connect()
app.use(indexRouter)

module.exports = app