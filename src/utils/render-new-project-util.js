var newProjectTemplate = require('../../views/workbench-templates/new-project-template.jade');
var addListener = require('./add-listeners-util.js');

module.exports = () => {
  var projectsDiv = document.getElementById("projects");
  projectsDiv.innerHTML = newProjectTemplate();
  addListener('cancelBtn', renderProjects);
  addListener('saveBtn', saveProject)
}

function renderProjects() {
  var render = require('./renderer-util.js');
  render.projects();
}

function saveProject() {
  console.log('hello')
}
