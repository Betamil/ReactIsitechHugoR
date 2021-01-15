var express = require('express')
var plante = require('../models/plante')
var router = express.Router()

router.get('/', async(req,res)=>{
    let plantes = await plante.find({})
    res.json(plantes)
})

router.post('/', async(req,res)=>{
    let plantes = new plante(req.body)
    plantes.save()
    res.json(plantes)
})


module.exports = router