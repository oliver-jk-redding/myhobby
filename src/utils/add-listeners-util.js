var request = require('superagent');
var newProjectTemplate = require('../../views/workbench-templates/new-project-template.jade');
var newElem = require('./make-new-element-util.js')

module.exports = () => {
  var newProjectBtn = document.getElementById('newProjectBtn');
  newProjectBtn.addEventListener('click', function() {
    var workbench = document.getElementById("workbench-wrapper");
    var projects = document.getElementById("projects");
    console.log('PRO ', projects)
    workbench.replaceChild(newElem('div', ['.project-box'], newProjectTemplate), projects);
  });
}
