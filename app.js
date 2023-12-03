const http = require('http');

http.createServer(function (req, res) {
	res.write("Testing");
	res.end();
}).listen(3001);

console.log("Server started on 3001");
