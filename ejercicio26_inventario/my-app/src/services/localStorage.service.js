const localStorageService = {
  ultimoItem: function () {
    if (localStorage.length != 0) {
      let ultimoIndex = localStorage.length - 1;
      let clave = localStorage.key(ultimoIndex);
      return clave;
    }
  },
  autonumerar: function () {
    if (localStorage.length == 0) {
      return 1;
    } else {
      let ultimo = this.ultimoItem();
      return JSON.parse(ultimo) + 1;
    }
  },
  agregar: function (id, item) {
    //Agrega item con key id

    localStorage.setItem(id, JSON.stringify(item));
  },

  eliminar: function (id) {
    //Elimina item con id == id

    localStorage.removeItem(id);
  },

  modificar: function (id, item) {
    //Modifica item con id == id
    localStorage.setItem(id, JSON.stringify(item));
  },

  get: function () {
    let array = [];
    for (let i = 0; i < localStorage.length; i++) {
      let clave = localStorage.key(i);
      let item = JSON.parse(localStorage.getItem(clave));
      array.push(item);
    }
    return array;
  },

  getItem: function (id) {
    let item = localStorage.getItem(id);
    return item;
  },

  getKey: function (id) {
    let key = null;
    for (let i = 0; i < localStorage.length; i++) {
      let clave = localStorage.key(i);
      let item = JSON.parse(localStorage.getItem(clave));

      if (item.id == id) {
        key = clave;
      }
    }
    return key;
  },
};

export default localStorageService;
