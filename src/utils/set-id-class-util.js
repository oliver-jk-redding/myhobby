module.exports = (elem, idClass) => {
  for(var i = 0; i<idClass.length; i++) {
    switch(idClass[i].slice(0,1)) {
      case '#':
        elem.id = idClass[i].slice(1);
        break;
      case '.':
        elem.className = idClass[i].slice(1);
        break;
    }
  }
  console.log(elem);
  return elem;
}