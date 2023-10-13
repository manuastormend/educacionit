const fs = require("fs");
const process = require("process");
const util = require("util");

// El método fs.readFileSync() es una interfaz de programación de aplicaciones incorporada del módulo fs que se utiliza para leer el archivo y devolver su contenido.
// En el método fs.readFile(), podemos leer un archivo de forma asincrónica sin bloqueo, pero en el método fs.readFileSync(), podemos leer archivos de forma sincrónica, es decir, le estamos diciendo a node.js que bloquee otros. procesos paralelos y realizar el proceso de lectura del archivo actual. Es decir, cuando se llama al método fs.readFileSync(), el programa del nodo original deja de ejecutarse y el nodo espera a que se ejecute la función fs.readFileSync(); después de obtener el resultado del método, se ejecuta el programa del nodo restante.

const texto = fs.readFileSync("./texto.txt", { encoding: "utf8", flag: "r" });
const utilinspect = util.inspect(process);

const lineas = texto.split();
const cantidadLineas = lineas.length;

const palabras = texto.split(/\s+/);
const cantidadPalabras = palabras.length;

const cantidadCaracteres = texto.length;

console.log(
  "///////////////////////////// Objeto Process ///////////////////////////"
);
console.log(utilinspect);

console.log("///////////////////////////// Texto ///////////////////////////");
console.log("  " + texto);
console.log("  ");
console.log("Lineas: ");
console.log(lineas);
console.log("La cantidad total de lineas es: " + cantidadLineas);
console.log("  ");
console.log(palabras);
console.log(
  "La cantidad total de palabras es: " +
    cantidadPalabras +
    " y la cantidad total de caracteres es " +
    cantidadCaracteres
);
