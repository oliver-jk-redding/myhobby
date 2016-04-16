var request = require('superagent');

module.exports = callback => {
  console.log('hi')
  request.get('http://localhost:3000/v1/myhobby/user/1', function(err, res) {
    if(res.status >= 200 && res.status < 400 && !err) {
      var userData = res.body;
      callback(userData);
    }
    else console.log(err);
  });
}