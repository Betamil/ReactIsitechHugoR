var express = require('express')
var email = require('../models/email')
var router = express.Router()

router.get('/', async(req,res)=>{
    let emails = await email.find({})
    res.json(emails)
})

router.post('/', async(req,res)=>{
    let emails = new email(req.body)
    emails.save()
    res.json(emails)
})


module.exports = router