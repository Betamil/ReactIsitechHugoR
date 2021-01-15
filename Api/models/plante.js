var mongoose = require('mongoose')
const { string } = require('yargs')

const Userschema = new mongoose.Schema({
    label:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    src:{
        type:String,
        required:true
    },
})

  
var PlanteModel = mongoose.model('plante',Userschema)
module.exports = PlanteModel






  