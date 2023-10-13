const validacionService = {
  pertenece: function (nombreCampo) {
    //checkea si pertenece al grupo de campos

    return (
      nombreCampo == "nombre" ||
      nombreCampo == "descripcion" ||
      nombreCampo == "precio"
    );
  },
  obligatorio: function (campo, nombreCampo) {
    //Recibe campo(valor actual del campo) y campoNombre(label del campo)
    //Si el campo es vacio, devuelve un mensaje de que el campo es obligatorio
    if (!campo) {
      return `El campo ${nombreCampo} es obligatorio`;
    }
  },

  regexp: function (campo, nombreCampo) {
    //Recibe campo(valor actual del campo) y campoNombre(label del campo)
    //Hace una validación dada una expresión regular

    let mensaje = "";
    let regexp = "";

    switch (nombreCampo) {
      case "nombre":
        regexp = new RegExp("^[A-Za-z ,.'\\-]+$");
        mensaje = "El nombre no puede tener números ni caracteres especiales";
        break;

      case "precio":
        regexp = new RegExp("^[0-9]+$");
        mensaje = "Ingrese un precio, no debe contener letras";
        break;

      default:
        break;
    }

    if (campo && regexp && !regexp.exec(campo)) return mensaje;
  },
};

export default validacionService;
