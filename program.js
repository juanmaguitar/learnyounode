// https://nodejs.org/docs/latest/api/process.html#process_process_argv

var sum=0

process.argv.forEach( function(item,i) {
	if (i>=2) {
		sum += parseInt(item,10);
	}
})

console.log(sum);