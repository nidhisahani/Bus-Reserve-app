const express=require("express")
require('./config/dbConnection')
require('dotenv').config()
const app=express()

// const app=require('./routes/stateDistrictRoute')
const port=process.env.Port || 3000;
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }));





app.listen(port,()=>{
    console.log(`Server running on port number ${port}`)
})