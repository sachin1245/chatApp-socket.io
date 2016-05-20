var socket = io();

socket.on('connect', function() {
	console.log('Connected to socket.io Server!');
});

socket.on('message', function(message) {
	console.log(message.text);

	jQuery('.messages').append('<p>' + message.text +'</p>')
});




//handles submitting of new message

var $form = jQuery('#messageForm');

$form.on('submit',function(event){
	event.preventDefault();

	var $message = $form.find('input[name=message]')
	socket.emit('message',{
		text: $message.val()
	});

	$message.val('');
});