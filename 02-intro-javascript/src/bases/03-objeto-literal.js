const persona = {
  nombre: "Toño",
  apellido: "Perez",
  edad: 45,
};

console.log(persona);

console.log({persona});

console.table(persona);

console.table({persona});

const persona2 = {...persona};

const persona3 = persona;

persona3.nombre = "andres" //Copias el espacio en memoria, al cambiar persona3 tambien cambias persona

console.log({persona});

console.log({persona2});

console.log({persona3});