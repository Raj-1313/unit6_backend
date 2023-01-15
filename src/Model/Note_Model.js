const mongoose = require('mongoose')

const noteSchema= mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    note:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    author:{
        type:Number,
        required:true,
    },
    category:{
            type:String,          
    }

})


const noteModel= mongoose.model("note", noteSchema)
module.exports= noteModel