var newProjectTemplate = require('../../views/workbench-templates/new-project-template.jade');
var addListener = require('./add-listeners-util.js');
var getUserData = require('./get-user-data-util.js');
var addOrRemoveDropzone = require('./addOrRemove-dropzone-util.js');

module.exports = () => {
  var projectsDiv = document.getElementById("projects");
  getUserData(function(userData) {
    projectsDiv.innerHTML = newProjectTemplate(userData);
    addOrRemoveDropzone('add');
    addListener('cancelBtn', renderProjects);
  })
}

function renderProjects() {
  var render = require('./renderer-util.js');
  addOrRemoveDropzone('remove');
  render.projects();
}
