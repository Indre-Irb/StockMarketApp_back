const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require("cors")

require('dotenv').config()

app.use(express.json())
app.use(cors())
app.listen(4000)

mongoose.connect(process.env.MONGO_KEY)
    .then(res => {
        console.log('connection good')
    }).catch(e => {
    console.log(e)
})

const router = require('./routes/main')
app.use('/', router)