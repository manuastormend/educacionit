const utils = {
  mayus: function (string) {
    //Devuelve una palabra pero con una mayuscula al inicio
    return string[0].toUpperCase() + string.slice(1);
  },
};

export default utils;
