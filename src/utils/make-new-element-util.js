var setIdClass = require('./set-id-class-util.js');

module.exports = (elemType, idClass, template, data) => {
  var elem = document.createElement(elemType);
  elem = setIdClass(elem, idClass);
  if(template)
    elem.innerHTML = template(data);
  return elem;
}