var Bids = require('../controllers/board');


module.exports = function(server) {
	var io = require('socket.io').listen(server);

	io.sockets.on('connection', function(socket){
	console.log('new socket connection...')
	console.log('socket id: ', socket.id);
	socket.on('newItem', function(data){
		io.emit('updatePosts')
	})
})
}
