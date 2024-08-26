const fs = require("fs");

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  const nuevaCita = {
    nombre: nombre,
    edad: edad,
    animal: animal,
    color: color,
    enfermedad: enfermedad,
  };
  citas.push(nuevaCita);
  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));
  console.log("Cita agregada satisfactoriamente");
};

const leer = () => {
  let citas = fs.readFileSync("./citas.json", "utf8");
  citas = JSON.parse(citas);
  let numeroDeCita = 1;
  citas.forEach((cita) => {
    console.log(
      `Cita número ${numeroDeCita++}: Nombre:${cita.nombre}, Edad:${
        cita.edad
      }, Tipo de Animal:${cita.animal}, Color:${cita.color}, Enfermedad:${
        cita.enfermedad
      }`
    );
  });
  console.log("Fin de las citas")
};

module.exports = { registrar, leer };
