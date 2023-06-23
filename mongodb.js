const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/todo-auth')
.then(()=>{
    console.log("database connected Successfully");
})
.catch(()=>{
     console.log("Failed to connect");
})


const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})

const collection = mongoose.model("collection",newSchema)


module.exports=collection