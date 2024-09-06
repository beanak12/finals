//1. importing express
const express = require('express')
require("./connection")
var empmodel = require("./model/emp")
var cors =require("cors")
 
//2. initialize
const app = new express()
//middle ware
app.use(express.json())
app.use(cors())

//3. api creation
app.get('/', (req, res) => {
    res.send("message from the server")

})
app.get('/trial', (req, res) => {
    res.send("Trial msg")
})

//add api
app.post("/add", async (req, res) => {
    try {
        await empmodel(req.body).save();
        res.send({message:"data added!!"})
    } catch (error) {
        console.log(error)

        
    }
})
app.get("/view", async (req, res) => {
    try {
        var Show = await empmodel.find();
        res.send(Show)
    } catch (error) {
        console.log(error)
    }
})
//to delete

app.delete("/remove/:id", async (req,res) => {
    try {
        await empmodel.findByIdAndDelete(req.params.id)
        res.send({ message: "data deleted!!" })
    } catch (error) {
        console.log(error)
    }
})
//update

app.put("/update/:id", async (req, res) => {
    try {
      var data =  await empmodel.findByIdAndUpdate(req.params.id, req.body);
        res.send({ message: "data updated!!" ,data})
    } catch (error) {
        console.log(error)
    }
})


//4. port
app.listen(3005, () => {
    console.log("port is running")
})