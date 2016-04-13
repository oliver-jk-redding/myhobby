var request = require('superagent');

// require templates
var navTemplate = require('./../views/nav.jade');
var profileTemplate = require('./../views/profile-templates/profile.jade');
var workbenchTemplate = require('./../views/workbench-templates/workbench.jade');

// require utils
var newElem = require('./utils/make-new-element-util.js');
var renderProfile = require('./utils/render-profile-util.js');
var renderProjects = require('./utils/render-projects-util.js');
// var renderUserHome = require('./utils/render-userhome-util.js')

document.addEventListener("DOMContentLoaded", function() {

  request.get('http://localhost:3000/v1/myhobby/user/1', function(err, res) {
    if(res.status >= 200 && res.status < 400 && !err) {
      var userData = res.body;
      document.body.appendChild(newElem('div', 'nav-wrapper', null, navTemplate, userData));
      document.body.appendChild(newElem('div', 'profile-wrapper', null, profileTemplate));
      document.body.appendChild(newElem('div', 'workbench-wrapper', null, workbenchTemplate));
      renderProfile(userData, function(element, callback) {
        callback(element);
      });
      renderProjects(userData, function(element, callback) {
        callback(element);
      });
    }
    else console.log(err);
  });

});