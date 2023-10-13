const fs = require("fs");
const process = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inicio() {
  console.log(
    "Ingrese C para crear un archivo, A para ver los archivos existentes, R para leer un archivo, U para modificar un archivo, D para borrar un archivo, o 'exit' para salir"
  );
}

function proceso(clave) {
  switch (clave) {
    case "C":
      create();
      break;
    case "A":
      allFiles();
      break;
    case "R":
      read();
      break;
    case "U":
      update();
      break;
    case "D":
      deleted();
      break;
    case "exit":
      finalizar();
      rl.close();
      break;
    default:
      console.log(
        "Ocurrió un error, por favor ingrese alguna de las siguientes opciones: "
      );
      main();
      break;
  }
}

function writeFileFunction(nombre, texto) {
  fs.writeFile(`./archivos/${nombre}.txt`, texto, function (err) {
    if (err) {
      console.log("");
      console.log("Hubo un problema con la creación del archivo");
      console.log("");
      main();
    } else {
      console.log("");
      console.log("Su archivo ha sido creado correctamente!");
      console.log("");
      main();
    }
  });
}

function existeArchivo(nombre) {
  let existe = false;
  if (fs.existsSync(`./archivos/${nombre}.txt`)) {
    existe = true;
  }
  return existe;
}

function create() {
  console.log("");

  rl.question("Nombre del archivo nuevo: ", (nombre) => {
    if (!existeArchivo(nombre)) {
      rl.question("Escriba el nuevo archivo de texto: ", (texto) => {
        writeFileFunction(nombre, texto);
      });
    } else {
      console.log("Este es el nombre de un archivo ya existente");
      console.log("");
      main();
    }
  });
}

function update() {
  console.log("");

  rl.question("Nombre del archivo a modificar: ", (nombre) => {
    if (existeArchivo(nombre)) {
      rl.question("Reescriba el archivo de texto: ", (texto) => {
        writeFileFunction(nombre, texto);
      });
    } else {
      console.log("Este archivo no existe");
      console.log("");
      main();
    }
  });
}

function allFiles() {
  console.log("");
  console.log("Ver archivos existentes");
  const files = fs.readdirSync("./archivos");
  console.log(files);
  console.log("");
  main();
}

function read() {
  console.log("");
  rl.question("Nombre del archivo que quieres leer: ", (nombre) => {
    if (existeArchivo(nombre)) {
      fs.readFile(`./archivos/${nombre}.txt`, "utf-8", (err, data) => {
        if (err) {
          console.log("Ocurrió un error leyendo este archivo", err);
          console.log("");
          main();
        } else {
          console.log("");
          console.log(nombre + ": " + data);
          console.log("");
          main();
        }
      });
    } else {
      console.log("Este archivo no existe");
      console.log("");
      main();
    }
  });
}

function deleted() {
  console.log("");

  rl.question("Nombre del archivo a borrar: ", (nombre) => {
    if (existeArchivo(nombre)) {
      fs.unlink(`./archivos/${nombre}.txt`, (err) => {
        if (err) {
          console.error("Ocurrió un error borrando este archivo", err);
          console.log("");
          main();
        } else {
          console.log("Archivo borrado correctamente!");
          console.log("");
          main();
        }
      });
    } else {
      console.log("Este archivo no existe");
      console.log("");
      main();
    }
  });
}

function finalizar() {
  console.log("¡Hasta luego!");
}

function main() {
  inicio();

  rl.question("Elija una opción: ", (respuesta) => {
    const opcion = respuesta.trim();
    proceso(opcion);
  });
}

main();
