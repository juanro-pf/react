const persona= {
  nombre: "Juan",
  edad: 45,
  clave: "557asd"
};

// console.log(persona.clave);
// console.log(persona.nombre);
// console.log(persona.edad);

const { nombre, edad:edadPersona } = persona;

console.log(nombre);
console.log(edadPersona);

const desPersona= ({ nombre, edad, clave, rango= 'Capitan' }) => `El cliente ${nombre} con edad ${edad}, rango ${rango} y clave ${clave} es exito`;

console.log(desPersona(persona));

const otro= {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e"
  }
}

const { a, b, c: {d, e} }= otro

// console.log(a, b, c)
console.log(a, b, d, e)
