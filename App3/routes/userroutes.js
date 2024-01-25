let express=require('express')
const { getdet, add } = require('../controller/usercontrol')
let route=new express.Router()
route.get("/getcust",getdet)
route.post("/addcust",add)
module.exports=route