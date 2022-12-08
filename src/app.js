require('dotenv-safe').config()
const express = require ('express')
const cors = require ("cors")
const app = express()
const indexRouter = require("./routes/indexRoutes")

const database = require('./config/database')
const colaboradoraRoutes = require('./routes/colaboradoraRoutes')

app.use (cors())
app.use(express.json())

app.use('/colaboradora', colaboradoraRoutes)
app.use('/users', colaboradoraRoutes)

database.connect()
app.use(indexRouter)

module.exports = app