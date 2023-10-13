import bebidas from "../assets/bebidas.json";
import localStorageService from "../services/localStorage.service";

function calcular() {
  let total = 0;
  let cantidades = localStorageService.get();
  bebidas.map((bebida, key) => {
    let cantidad = cantidades[bebida.id].cantidad;
    let aux = cantidad * bebida.precio;
    console.log(aux);
    total = total + aux;
    console.log("total", total);
  });
  return total;
}

export default calcular;
