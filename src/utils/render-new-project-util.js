var newProjectTemplate = require('../../views/workbench-templates/new-project-template.jade');
var addListener = require('./add-listeners-util.js');
var getUserData = require('./get-user-data-util.js');

module.exports = () => {
  var projectsDiv = document.getElementById("projects");
  getUserData(function(userData) {
    projectsDiv.innerHTML = newProjectTemplate(userData);
    addListener('cancelBtn', renderProjects);
  })
}

function renderProjects() {
  var render = require('./renderer-util.js');
  render.projects();
}
