// var request = require('superagent')

// request.get('http://localhost:5000/myhobby/users', function (err, res) {
//   if(err){console.log(err);return}
//   console.log(res.body)
// })
var temp = require('./../views/index.jade')
document.body.innerHTML = temp()