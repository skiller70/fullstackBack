const express = require("express")
const app = express()
const USER = require("./schema")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require('cors')


mongoose.connect("mongodb+srv://skiller007:qjGaGJXD64NlPZOm@cluster0.mbaya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then((data)=>{console.log(`database is connected`)}).catch((err)=>{console.log(` something went wrong ${err}`)})


// MIDDLEWARE **************
app.use(cors())
app.use(bodyParser.json())

// SERVER GET ROUTE ****************************
app.get("/home",(req,res)=>{
res.send("Jai shree ram")
})

app.get("/test",(req,res)=>{
res.send("Jai shree ram")
})

// SERVER POST ROUTE ****************************

app.post("/saveUser",async (req,res)=>{

    console.log(req.body.userId)

    const {name,age,userId} = req.body


await USER.create({name,age,userId})

 

res.send("data save successfully")    
})


// GET USER  ROUTE ***************************


app.get("/getUser:id",async(req,res)=>{


const data = await USER.findOne({userId:req.params.id})

console.log(data)

res.send(data)

})








app.listen("4000",()=>{console.log(`server is running `)})


