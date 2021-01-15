var express = require('express')
var app = express()
var mongoose =require('mongoose')
var routerPlante = require('./routeurs/plantes')
var routerEmail = require('./routeurs/emails')
var bodyParser = require('body-parser')

mongoose.connect('mongodb+srv://admin:JIBEAGF4SxMJMHaT@cluster0.lzd0c.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
  next();
})


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var db = mongoose.connection
db.on('error', console.error.bind(console,'connection error :'))
db.once('open',() =>{
  console.log('db connected')
} )

app.get('/',(req,res) =>{
  res.json({status: "ok"})
})

app.use('/plantes', routerPlante)
app.use('/emails', routerEmail)




app.listen(3001)

