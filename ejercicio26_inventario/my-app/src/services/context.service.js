import utils from "../utils/utils";

const contextService = {
  metodo: function (propiedad) {
    //Devuelve el nombre del metodo
    return "set" + utils.mayus(propiedad);
  },
  error: function (propiedad) {
    //Devuelve el nombre del metodo
    return "error" + utils.mayus(propiedad);
  },
  setError: function (propiedad) {
    //Devuelve el nombre del setter de Error
    return "setError" + utils.mayus(propiedad);
  },
};

export default contextService;
