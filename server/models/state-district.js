const mongoose=require('mongoose')

const stateDistrictSchema=mongoose.Schema({
    state:String,
    districs:Array
})

module.exports=mongoose.model("state_district", stateDistrictSchema)