require('../stylesheets/drpzn.css');
require('../stylesheets/main.css');
require('../dropzone-4.3.0/dist/min/dropzone.min.css');
var dropzoneUtil = require('./utils/dropzone-config-util.js')
var render = require('./utils/renderer-util.js');

document.addEventListener("DOMContentLoaded", function() {

  render.navWrapper();
  render.bodyWrapper();
  render.profileWrapper();
  render.profile();
  render.workbenchWrapper();
  render.projects()
  // dropzoneUtil.init();

});
