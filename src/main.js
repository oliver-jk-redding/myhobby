var request = require('superagent');
var newElem = require('./utils/make-new-element-util.js')
var nav = require('./../views/nav.jade');
var body = require('./../views/body.jade');
var renderProfile = require('./utils/render-profile-util.js')

document.addEventListener("DOMContentLoaded", function() {

  request.get('http://localhost:3000/v1/myhobby/user/1', function(err, res) {
    if(res.status >= 200 && res.status < 400 && !err) {
      var userData = res.body;
      document.body.appendChild(newElem('div', nav, userData));
      document.body.appendChild(newElem('div', body));
      renderProfile(userData, function(element, callback) {
        callback(element);
      });
    }
    else console.log(err);
  });

});