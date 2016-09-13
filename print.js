var fs = require('fs');
buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var final = str.split('\n').length - 1;
console.log(final);