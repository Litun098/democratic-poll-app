const mongoose = require('mongoose')

const pollSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    options:[{
        type:String
    }],
    status:{
        type:String
    }
},{timestamps:true})

module.exports = mongoose.model('Poll',pollSchema);