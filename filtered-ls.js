var fs = require('fs');
var path =  require('path');
fs.readdir(process.argv[2], function (err, str){
  if(err){
	throw err;
		}
		for (var i = 0 ; i < str.length; i++) {
		if (path.extname(str[i]) == '.' + process.argv[3] ) {
			console.log(str[i]);
		}
		}
});