module.exports = (elemType, idName, className, template, data) => {
  var elem = document.createElement(elemType);
  if(idName)
    elem.id = idName;
  if(className)
    elem.className += className;
  elem.innerHTML = template(data);
  return elem;
}