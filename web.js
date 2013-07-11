var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

function readAndSendFileContent(file, response) {
	fs.readFile(file, 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
	response.send(data);
	});
}

app.get('/', function(request, response) {
  readAndSendFileContent('./index.html', response);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});