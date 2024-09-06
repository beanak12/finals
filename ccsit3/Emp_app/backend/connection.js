var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://akkabiakk321:242077@cluster0.zc1gw.mongodb.net/Madappalli?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
    console.log("connected")
    })
    .catch((error) => {
    console.log(error)
        
    })