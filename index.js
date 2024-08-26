const {registrar, leer } = require("./operaciones.js");

const argumentos = process.argv.slice(2);
const operacion = argumentos[0].toLowerCase();

if (operacion !== "registrar" && operacion !== "leer") {
    console.log("Error!, el comando debe tener la siguintes forma:");
    console.log("node index.js [registrar o leer] Nombre Edad TipoDeAnimal Color Enfermedad");
    process.exit(1); 
}

if (operacion === "registrar") {
    if (argumentos.length !== 6) {
        console.log("Error!, deben ser 5 argumentos.");
        console.log("El comando debe tenar la siguintes forma:");
        console.log("node index.js registrar Nombre Edad TipoDeAnimal Color Enfermedad");
        console.log('Ejemplo: node index.js registrar Roky "2 años" Perro Negro Moquillo');
        process.exit(1); 
    }else{
        const nombre = argumentos[1];
        const edad = argumentos[2];
        const animal = argumentos[3];
        const color = argumentos[4];
        const enfermedad = argumentos[5];
        registrar(nombre, edad, animal, color, enfermedad);
    }
}else{
    leer();
}
