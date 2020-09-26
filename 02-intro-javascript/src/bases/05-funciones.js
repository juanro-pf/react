function saludar(nombre){
  return `Hola ${nombre}`;
}

console.log(saludar("Juan"));

const saludar2 = function(nombre){
  return `Hola otra vez ${nombre}`;
}

console.log(saludar2("Juan"));

const saludar3= nombre => `Hola por 3ra vez ${nombre}`;

const saludar4= nombre => (`Hola por 4ta vez ${nombre}`);

console.log(saludar3("Juan"));

console.log(saludar4("Juan"));

//Ejercicio: Convierte la siguiente funcion a arrow function
function getUsuarioActivo(nombre){
  return {
    uid: 'abc456',
    username: nombre,
  };
};

const getUsuarioActivo2 = (nombre) => ({
  uid: 'abc456',
  username: nombre,
});

console.log(getUsuarioActivo("JRO"))

console.log(getUsuarioActivo2("JRO"))