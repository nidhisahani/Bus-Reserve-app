const mongoose = require('mongoose')

const busOwnerSchema = mongoose.Schema({
    "name": String,
    "totalSeats": Number,
    "rating": Number,
    "animeties": Array
})

module.exports = mongoose.model("bus_owner", busOwnerSchema)