const mongoose = require('mongoose');//import mongoose
const schema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    age: 20,
    gender: "Male"
})