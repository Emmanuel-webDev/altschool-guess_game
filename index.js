const express = require('express')
const http = require('http')
const cors = require('cors')
const socket = require('socket.io')
const app = express()
const userRoutes = require('./Contollers/auth')


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set("views", "Interface")
app.set('view engine', 'ejs')

app.use(userRoutes)

app.use((error, req, res, next)=>{
    res.status(500).json(error.message)
    next()
})

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
