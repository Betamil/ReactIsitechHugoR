var mongoose = require('mongoose')
const { string } = require('yargs')

const Emailschema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
})

  
var EmailModel = mongoose.model('email',Emailschema)
module.exports = EmailModel






  