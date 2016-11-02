var fs = require('fs')
var path = require('path')

function getFilteredListDir ( dirName, fileNameExtension, callback ) {

	fs.readdir(dirName, function(err, filesNames){

		if (err) return callback(err);

		var filteredFiles = filesNames.filter(function(fileName,i) {
			return path.extname(fileName) === "." + fileNameExtension;;
		})

		callback(err, filteredFiles)

	})
}

module.exports = getFilteredListDir;