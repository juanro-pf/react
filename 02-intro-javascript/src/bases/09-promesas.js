
// const promesa= new Promise( (resolve, reject) => {

//   setTimeout( () => {
//     console.log("2 segundos despues")
//     resolve("Listo")
//   }, 2000)

// })

// promesa.then( (mensaje) => {
//   console.log(mensaje)
// })

const getHeroeById = id => {

    return new Promise( (resolve, reject) => {
  
      setTimeout( () => {
        console.log("2 segundos despues")
        if( id < 10){ //if(undefined) = false
          resolve("Pequeño bien")
        }else{
          reject("Grande mal")
        }
      }, 2000)
    
    })
  
  }
  
  getHeroeById(10)
    .then( msg => console.log(msg))
    // .catch( err => console.log(err))
    .catch( console.warn )
  