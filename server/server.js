const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const {generateMessage} = require('./utils/message')
const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000;
let app = express()
let server = http.createServer(app)
var io = socketIO(server)

io.on('connection',(socket)=>{
    console.log("New user connected")
    // socket.emit from admin text welcome to chat
    socket.emit('newMessage',generateMessage('Admin','Welcome to the chat app'))

    // socket.broadcast.emit from admin, new user joined
    socket.broadcast.emit('newMessage',generateMessage('Admin','New user joined'))

    socket.on('createMessage',(message,callback)=>{
        console.log("Incoming message: ",message)
        io.emit('newMessage',generateMessage(message.from,message.text))
        callback('This is from the server')
        // socket.broadcast.emit('newMessage',{
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()            
        // })
    })

    socket.on('disconnect',(socket)=>{
        console.log(`disconnected`)
    })    
})

app.use(express.static(publicPath))

server.listen(port,()=>{console.log(`server running on ${port}`)})
console.log(publicPath)