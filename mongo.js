const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/quiz")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        rquired:true
    }
})

const collection = mongoose.model("user",newSchema)

module.exports=collection