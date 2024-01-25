let cust=require("../models/usermodels")
let getdet=async(req,res)=>{
try{
  let data=await  cust.find()
  res.json(data)
}
catch(err)
{
    res.send(err)
}
}
let add=async(req,res)=>{
    try
    {
    let data=new cust(req.body)
    await data.save()
    res.send("reg done")
    }
    catch(err)
    {
        res.send(err)
    }

}

module.exports={getdet,add}