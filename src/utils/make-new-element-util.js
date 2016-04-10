module.exports = (elemType, template, data) => {
  var elem = document.createElement(elemType);
  elem.innerHTML = template(data);
  return elem;
}