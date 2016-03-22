var MongoClient = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost:27017/meanhotel';

var _connection = null;

var open = function() {
	MongoClient.connect(dbURL, function(err, db) {
		if (err) {
			console.log("DB Connection Failed");
			return;
		}
		_connection = db;
		console.log("DB Connection Open", db);
	});
};

var get = function() {
	return _connection;
};

module.exports = {
	open : open,
	get: get
}