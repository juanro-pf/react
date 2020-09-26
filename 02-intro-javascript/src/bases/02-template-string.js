const nombre= "Juan";
const apellido= "Ponce";

const nombreCompleto= `Hola ${nombre},
Es tu apellido ${apellido}?
Y tu edad ${15 + 15}?
Y el resultado de la funcion es ${colorear()}`;

function colorear(){
  return "Coloreando ando bro";
}

console.log(nombreCompleto)