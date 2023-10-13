const localStorageService = {
  agregar: function (id, item) {
    //Agrega item con key id

    localStorage.setItem(id, JSON.stringify(item));
  },

  crear: function () {
    for (let i = 0; i < 4; i++) {
      let item = { id: JSON.parse(i), cantidad: 0 };
      localStorage.setItem(i, JSON.stringify(item));
    }
  },

  get: function () {
    let array = [];
    for (let i = 0; i < localStorage.length; i++) {
      let item = JSON.parse(localStorage.getItem(i));
      array.push(item);
    }
    return array;
  },

  getItem: function (id) {
    let item = localStorage.getItem(id);
    return item;
  },

  agregarUno: function (id) {
    let anterior = JSON.parse(this.getItem(id));
    let item = {
      id: JSON.parse(id),
      cantidad: anterior.cantidad + 1,
    };

    this.agregar(id, item);
  },

  eliminarUno: function (id) {
    let anterior = JSON.parse(this.getItem(id));
    let item = {
      id: JSON.parse(id),
      cantidad: anterior.cantidad - 1,
    };

    this.agregar(id, item);
  },

  obtenerCantidad: function (id) {
    let item = localStorage.getItem(id);
    return JSON.parse(item).cantidad;
  },

  esVacio: function () {
    let i = 0;
    let auxBoolean = true;
    while (i < 4 && auxBoolean) {
      if (this.obtenerCantidad(i) > 0) {
        auxBoolean = false;
      }
      i++;
    }
    return auxBoolean;
  },

  precioTotal: function () {},
};
export default localStorageService;
