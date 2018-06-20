var socket = io();

socket.on('connect',function(){
    console.log("connected to server.")

})

socket.on('disconnect',function(){
    console.log("disconnected from server")
})

socket.on('newEmail',function(email){
    console.log("New Email: ",email)
})

socket.on('newMessage', function(message){
    console.log("New Message: ",message)

    var li = jQuery('<li></li>')
    li.text(`${message.from}: ${message.text}`)

    jQuery('#messages').append(li)
})

socket.on('newUser',function(data){
    console.log(data)
})

socket.on('join',function(data){
    console.log(data)
})

jQuery('#message-form').on('submit',function(e){
    e.preventDefault();
    socket.emit('createMessage',{
        from:"User",
        text: jQuery('[name=message]').val()
    },function(){

    })
})