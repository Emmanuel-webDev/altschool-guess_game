const express = require('express')
const userSchema = require('../MODEL/host')
const bcrypt = require('bcryptjs')

const app = express()

app.get('/Signup', (req, res)=>{
    res.render('../Interface/Signup')
})

app.post('/signup', async(req, res)=>{
    const {username,email, code} = req.body

    const hashedCode = await bcrypt.hash('password', 12)
    req.body.password = hashedCode

    const gameHost = new userSchema({
        name: req.body.username,
        email: req.body.mail,
        password: req.body.code
    })

    await gameHost.save()
    res.status(201).redirect('/Login')
})

app.get('/login', (req, res)=>{
    res.render('../Interface/Login')
})


module.exports = app