const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    fullname:String,
    email:String,
    password:String,
    contact:Number,
    order:Array
})
module.exports=mongoose.model("user",userSchema);
