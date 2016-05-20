var socket = io();
var room = getQueryVariable('room');
var name = getQueryVariable('name') || 'Anonymous';

console.log(name + ' wants to join ' + room);

socket.on('connect', function() {
	console.log('Connected to socket.io Server!');

	socket.emit('joinRoom',{
		name: name,
		room: room
	})

});

jQuery('#roomName').text(room);



socket.on('message', function(message) {
	var momentTimestamp = moment.utc(message.timestamp);
	console.log(message.text);

	var $message = jQuery('.messages');

	$message.append('<p><strong>' + message.name + ' '+ momentTimestamp.local().format('h:mm a') + '</strong></p>');
	$message.append('<p>' + message.text + '</p>');
});




//handles submitting of new message

var $form = jQuery('#messageForm');

$form.on('submit',function(event){
	event.preventDefault();

	var $message = $form.find('input[name=message]')
	socket.emit('message',{
		name: name,
		text: $message.val()
	});

	$message.val('');
});