/*
HTTP COLLECT (Exercise 8 of 13)

Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.
*/

var http = require('http');
var requiredUrl = process.argv[2];
var bl = require('bl');

http.get( requiredUrl, function (response) {
 response.pipe( bl(handleFullStream) )
})

function handleFullStream(err, data) {
 if (err) return console.error(err)
 data = data.toString()
 console.log(data.length)
 console.log(data)
}