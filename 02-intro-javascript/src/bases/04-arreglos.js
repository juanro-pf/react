// const arreglo= new Array(100);

const arreglo= [1, 2, 3, 4];

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

const arreglo2= [...arreglo, 5]

const arreglo3= arreglo2.map(num => num + 5);

//Es lo mismo que la función de arriba
// const arreglo3= arreglo2.map(function(num){
//   return num + 5;
// });

console.log(arreglo);

console.log(arreglo2);

console.log(arreglo3);