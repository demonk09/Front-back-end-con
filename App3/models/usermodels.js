let mongoose=require('mongoose')
let usersch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "password":String,
    "location":String,
    "phno":String,
    "gen":String
})
module.exports=mongoose.model("cust",usersch)