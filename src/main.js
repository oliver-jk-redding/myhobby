var request = require('superagent');
require('../main.css');

// require templates
var navTemplate = require('./../views/nav.jade');
var profileTemplate = require('./../views/profile-templates/profile.jade');
var workbenchTemplate = require('./../views/workbench-templates/workbench.jade');

// require utils
var newElem = require('./utils/make-new-element-util.js');
var renderProfile = require('./utils/render-profile-util.js');
var renderProjects = require('./utils/render-projects-util.js');
// var renderUserHome = require('./utils/render-userhome-util.js');
var addListeners = require('./utils/add-listeners-util.js');

document.addEventListener("DOMContentLoaded", function() {

  request.get('http://localhost:3000/v1/myhobby/user/1', function(err, res) {
    if(res.status >= 200 && res.status < 400 && !err) {
      var userData = res.body;
      document.body.appendChild(newElem('nav', ['#nav-wrapper'], navTemplate, userData));
      document.body.appendChild(newElem('div', ['#body-wrapper']));
      var bodyWrapper = document.getElementById('body-wrapper');
      bodyWrapper.appendChild(newElem('div', ['#profile-wrapper'], profileTemplate));
      bodyWrapper.appendChild(newElem('div', ['#workbench-wrapper'], workbenchTemplate));
      renderProfile(userData, function(element, callback) {
        callback(element);
      });
      renderProjects(userData, function(element, callback) {
        callback(element);
      });
      addListeners();
    }
    else console.log(err);
  });

});
