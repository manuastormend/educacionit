const favService = {
  isValidId: (id) => {
    let isValid = false;
    let i = 0;
    while (i < localStorage.length) {
      let clave = localStorage.key(i);
      if (clave == id) {
        isValid = true;
        i = localStorage.length;
      }
      i++;
    }
    return isValid;
  },
  change: (id) => {
    let item;
    let i = 0;
    while (i < localStorage.length) {
      let clave = localStorage.key(i);
      if (clave == id) {
        console.log("Encontro");
        item = JSON.parse(localStorage.getItem(clave));
        console.log("Antes", item);
        item.esFav = !item.esFav;
        localStorage.setItem(clave, JSON.stringify(item));
        console.log("Despues", JSON.parse(localStorage.getItem(clave)));
      }
      i++;
    }
    return item;
  },
};

export default favService;
