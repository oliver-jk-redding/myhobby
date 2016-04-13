var projectTemplate = require('./../../views/workbench-templates/project.jade');
var newElem = require('./make-new-element-util.js');

module.exports = (userData, callback) => {
  var projectContainer = document.getElementById("workbench-wrapper");
  for(var project in userData.projects) {
    callback(userData.projects[project], function(element) {
      projectContainer.appendChild(newElem('div', null, 'project box', projectTemplate, userData.projects[project]));
    });
  }
}
