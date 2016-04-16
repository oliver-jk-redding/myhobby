var newElem = require('./make-new-element-util.js');
var newProjectTemplate = require('../../views/workbench-templates/new-project-template.jade');
var addListener = require('./add-listeners-util.js');
var renderProjects = require('./render-projects-util.js');

module.exports = () => {
  var workbench = document.getElementById("workbench-wrapper");
  var projectsDiv = document.getElementById("projects");
  projectsDiv.innerHTML = newProjectTemplate();
  // workbench.replaceChild(newElem('div', ['.projectDivHeading'], newProjectTemplate), replaceElem);
  addListener('cancelBtn', renderProjects);
}