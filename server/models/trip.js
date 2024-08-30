const mongoose = require('mongoose')

const tripSchema = mongoose.Schema({
    bookingdate: Date,
    from: String,
    to: String,
    busOwnerID: Number,
    startTime:Number ,
    EndTime: Number,
    category: String,
    SeatBooked: Array,
    bus_no: String,
    animeties_list: Array,
    busFare: Number,
    busName: String
})

module.exports=mongoose.model("trip", tripSchema)