var projectTemplate = require('./../../views/workbench-templates/project.jade');
var workbenchTemplate = require('./../../views/workbench-templates/workbench.jade')
var newElem = require('./make-new-element-util.js');
var renderNewProject = require('./render-new-project-util.js');
var addListener = require('./add-listeners-util.js');

module.exports = (userData, callback) => {
  var projectContainer = document.getElementById("projects");
  projectContainer.innerHTML = workbenchTemplate();
  userData.projects.map(function(project) {
    var numProShots = project.progressShots.length;
    project.progressShots = project.progressShots.reverse();
    projectContainer.appendChild(newElem('div', ['.project-box'], projectTemplate, project));
  });
  addListener('newProjectBtn', renderNewProject);
}
