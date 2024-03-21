const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const adminRoute = require('./routes/admin/adminRoutes')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.get('/', (req, res, next) => {
    res.send('mpr server running')
})

app.use('/admin', adminRoute)
mongoose.connect(process.env.MONGODB_URI).then(
    app.listen(process.env.PORT, () => {
        console.log('connected to database and server')
    })
)
