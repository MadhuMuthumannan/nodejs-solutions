var fs = require('fs')
var path = require('path')

module.exports = function (obj, test, callback) {

  fs.readdir(obj, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + test
    })

    callback(null, list)
  })
}
