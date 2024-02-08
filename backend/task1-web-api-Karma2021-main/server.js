require('dotenv').config()
const express = require('express')
const path = require("path");
const mongoose = require('mongoose')
const errorHandler = require('./middleware/errorHandler')
const service_routes = require('./routes/serviceRoute')
const users_routes = require('./routes/userRoute')
const admins_routes = require('./routes/adminRoute')
const booking_routes = require('./routes/bookingRoute')
const app = express()
const port = process.env.PORT || 5001;

const MONGODB_URI = process.env.NODE_ENV === 'test'
    ? process.env.TEST_DB_URI
    : process.env.DB_URI

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log(`connected to ${MONGODB_URI}`)
    })
    .catch((err) => console.log(err))

app.use(express.json())

app.get('/', (req, res) => {
    res.send('app working')
})
app.use('/services', service_routes)
app.use('/users', users_routes)
app.use('/bookings', booking_routes)
app.use('/uploads', express.static('public/uploads'));
app.use('/admin', admins_routes)

app.use(express.static(path.join(__dirname, "public")));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
module.exports = app; 