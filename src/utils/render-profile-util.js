module.exports = (userData, callback) => {
  var profileDivs = document.querySelectorAll('.profile');
  for(var i = 0; i < profileDivs.length; i++){
    callback(profileDivs[i], function(element) {
      let template = require('./../../views/' + element.id + '.jade');
      element.innerHTML = template(userData);
    });
  }
}
