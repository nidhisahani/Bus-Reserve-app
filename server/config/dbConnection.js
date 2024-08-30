const mongoose=require("mongoose")
const busOwnerModel=require('../models/bus_owner')
const stateDistrictModel=require('../models/state-district')
const tripModel=require('../models/trip')

const {busData}=require("../Data/busOwnerData")
const {tripData}=require('../Data/tripData')
const {stateDistrictData}=require("../Data/stateDistrictData")


require('dotenv').config()

const DATABASE_URL=process.env.URL;
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

const refreshAll = async () => {
    await busOwnerModel.deleteMany({})
    await tripModel.deleteMany({})
    await stateDistrictModel.deleteMany({})
    await busOwnerModel.insertMany(busData)
    await tripModel.insertMany(tripData)
    await stateDistrictModel.insertMany(stateDistrictData)

}

refreshAll()

module.exports=mongoose.connection