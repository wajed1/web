const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{username,pass}=req.body

    try{
        const check=await collection.findOne({username:username})
        const check2=await collection.findOne({pass:pass})

        if(check && check2){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})
app.listen(8000,()=>{
    console.log("port connected");
})
