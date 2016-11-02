/*
JUGGLING ASYNC (Exercise 9 of 13)

This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.
*/

var http = require('http');
var async = require('async');
var urls = process.argv.slice(2);
var concatStream = require('concat-stream');

var urlGets = urls.map(function( item, i ) {

	return function(callback){
		http.get(item, function(response) {

			response.setEncoding('utf8');
			function handleResponse( responseFromServer ) {
				callback(null, responseFromServer);
			}

			response.pipe( concatStream(handleResponse) );

		})
	}
})

async.series( urlGets, function(err, responses) {
	if (err) throw err;
	responses.forEach(function(response, i) {
		console.log(response);
	})
});

// node program.js http://www.google.com http.//www.skylabcoders.com http://www.softonic.com