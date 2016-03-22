var message = "";

module.exports.goodbye = function() {

	console.log('Goodbye');
	message = "Test Message"
	return 'something';

};

module.exports.returnMessage = function() {
	return message;
}