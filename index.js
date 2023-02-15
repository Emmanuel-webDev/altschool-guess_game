const express = require('express')
const http = require('http')
const cors = require('cors')
const socket = require('socket.io')
const app = express()

let server = http.createServer(app)

const io = socket(server, {
    cors:{
        origin:"*",
        methods:['GET', 'POST']
    }
})

io.on('connection', (socket)=>{
    console.log(`${socket.id} connected`)
    socket.on('message', (abc)=>{
        console.log(abc)
    })
})

server.listen(8080, ()=>{
    console.log('Server running')
})
