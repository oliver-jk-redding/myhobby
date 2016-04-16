module.exports = (button, func) => {
  if(button == 'cancelBtn')
    console.log(func)
  else
    console.log('notcancelbtn')
  var newButton = document.getElementById(button);
  newButton.addEventListener('click', func, false); 
}
