var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var readAndSendFileContent = function (file, respond) {
	fs.readFile(file, 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
	respond(data);
	});
}

app.get('/', function(request, response) {
  readAndSendFileContent("index.html", response.send);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});