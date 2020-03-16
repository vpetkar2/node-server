const http = require('http');

const hostname = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {

	console.log('request for '+req.url+' by method'+req.method);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<html><body><h1>Success! Running node Server..</h1></body></html>');	
});

server.listen(port, hostname, ()=> {
	console.log(`server running at http://${hostname}:${port}`);
});