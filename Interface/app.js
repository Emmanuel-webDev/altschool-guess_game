let socket = io('http://localhost:8080')

socket.emit('message', {
    msg:"Client sent this"
})