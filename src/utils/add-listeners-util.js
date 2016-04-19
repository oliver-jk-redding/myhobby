module.exports = (btnName, func) => {
  var button = document.getElementById(btnName);
  button.addEventListener('click', func, false);
}
