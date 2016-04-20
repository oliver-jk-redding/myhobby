module.exports = cmd => {

  var dropzone = document.getElementById('dropzone');

  if(cmd === 'add') {
    var dropzoneContainer = document.querySelector('.new-project-content').childNodes[0];
    dropzoneContainer.insertBefore(dropzone, dropzoneContainer.childNodes[1]);
    dropzone.className = dropzone.className.replace('hidden', '');
  }

  else if(cmd === 'remove') {
    dropzone.className = 'hidden';
    document.body.appendChild(dropzone);
  }

}
