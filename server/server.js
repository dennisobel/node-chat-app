const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000;
let app = express()
let server = http.createServer(app)
var io = socketIO(server)

io.on('connection',(socket)=>{
    console.log("New user connected")

    socket.on('createMessage',(message)=>{
        console.log("Incoming message: ",message)
        io.emit('newMessage',{
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })

    })

    socket.on('disconnect',(socket)=>{
        console.log(`disconnected`)
    })    
})

app.use(express.static(publicPath))

server.listen(port,()=>{console.log(`server running on ${port}`)})
console.log(publicPath)