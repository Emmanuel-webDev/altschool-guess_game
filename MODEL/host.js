const mongoose = require('mongoose')

const gameHost = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    passcode:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('host', gameHost)