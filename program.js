/*
HTTP JSON API SERVER (Exercise 13 of 13)

Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

/api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second'
properties. For example:

 {
   "hour": 14,
   "minute": 23,
   "second": 15
 }

Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the  property 'unixtime'.

For example:

 { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to your program.

*/

var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer()

server.on('request', function (req, res) {

	var urlParsed = url.parse(req.url, true);
	var isoDate = urlParsed.query.iso;
	var date = new Date(isoDate);

	var oParsedTime, oUnixTime;

	res.writeHead(200, { 'Content-Type': 'application/json' })

  if (req.method === 'GET') {

  	if (urlParsed.pathname === '/api/parsetime') {

			oParsedTime = {
       "hour": date.getHours(),
       "minute": date.getMinutes(),
       "second": date.getSeconds(),
     	}
			res.end( JSON.stringify(oParsedTime) )

  	}

  	if (urlParsed.pathname === '/api/unixtime') {
  		oUnixTime = {
       "unixtime": date.getTime()
     	}
  		res.end( JSON.stringify(oUnixTime) )
  	}

  }

})

server.listen(port)