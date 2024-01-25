let express=require("express")
let mongoose=require("mongoose")
const route = require("./routes/userroutes")
let cors=require("cors")
let app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/23fsd1").then(()=>{
    console.log("ok")
}).catch((err)=>{
    console.log(err)
})

app.use("/",route)
app.listen(5000,()=>{
    console.log("server started at http://127.0.0.1:5000")
})