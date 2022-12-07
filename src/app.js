require('dotenv').config()
const express = require ('express')
const cors = require ("cors")
const app = express()

const database = require('./config/database')
const colaboradoraRoutes = require('./routes/colaboradoraRoutes')

app.use (cors())
app.use(express.json())

app.use('/colaboradora', colaboradoraRoutes)
app.use('/users', colaboradoraRoutes)

database.connect()

module.exports = app