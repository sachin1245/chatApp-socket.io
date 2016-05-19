var socket = io();

socket.on('connect',function(){
	console.log('Connected to socket.io Server!');
});

socket.on('message', function (message){
	console.log(message.text);
});

socket.emit('message',{
	text: 'Hi buddy how are you?'
})