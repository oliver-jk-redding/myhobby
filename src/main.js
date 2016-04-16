require('../main.css');
var render = require('./utils/renderer-util.js')

document.addEventListener("DOMContentLoaded", function() {

  render.navWrapper();
  render.bodyWrapper();
  render.profileWrapper();
  render.profile();
  render.workbenchWrapper();
  render.projects();

});
