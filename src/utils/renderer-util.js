// require templates
var navTemplate = require('./../../views/nav.jade');
var profileTemplate = require('./../../views/profile-templates/profile.jade');
var workbenchTemplate = require('./../../views/workbench-templates/workbench.jade');

// require utils
var getUserData = require('./get-user-data-util.js');
var newElem = require('./make-new-element-util.js');

module.exports = {

  navWrapper: function() {
    getUserData(function(userData) {
      document.body.appendChild(newElem('nav', ['#nav-wrapper'], navTemplate, userData));
    });
  },

  bodyWrapper: function() {
    document.body.appendChild(newElem('div', ['#body-wrapper']));
  },

  profileWrapper: function() {
    var bodyWrapper = document.getElementById('body-wrapper');
    bodyWrapper.appendChild(newElem('div', ['#profile-wrapper'], profileTemplate));
  },

  profile: function() {
    var renderProfile = require('./render-profile-util.js');
    getUserData(function(userData) {
      renderProfile(userData, function(element, callback) {
        callback(element);
      });
    });
  },

  workbenchWrapper: function() {
    var bodyWrapper = document.getElementById('body-wrapper');
    var wbWrapper = newElem('div', ['#workbench-wrapper']);
    bodyWrapper.appendChild(wbWrapper);
    wbWrapper.appendChild(newElem('div', ['.workbench', '#projects']));
  },

  projects: function() {
    var renderProjects = require('./render-projects-util.js');
    getUserData(function(userData) {
      renderProjects(userData, function(element, callback) {
        callback(element);
      });
    });
  }

}
