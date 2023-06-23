const express = require("express");
const collection = require('./mongodb')
const cors = require("cors")
const app1 = express()
app1.use(express.json())
app1.use(express.urlencoded({extended:true}))
app1.use(cors())

app1.get("/Login",cors(),(req,res)=>{
      
})

app1.post("/Login",async(req,res)=>{
    const {email,password} = req.body
    try{
        const check = await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
    res.json("notexist")
    }
})

app1.post("/Register",async(req,res)=>{
    const {name,email,password} = req.body
    try{
        const check = await collection.findOne({email:email})
        const data ={
            name:name,
            email:email,
            password:password,
        }
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch(e){
    res.json("notexist")
    }
})

app1.listen(3000,()=>{
    console.log("Port is running")
})