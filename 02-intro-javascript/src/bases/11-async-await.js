
const getImagen= async() => {

  try{
    const apiKey= "WrD1bukeKT5ir893Xjsrh3JwfDsSp7Id"
  
    const resp= await fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`)
    const data= await resp.json()
    const img= document.createElement('img')
    img.src= data.data.images.original.url
    document.body.append(img)
  }catch(error){
    console.error(error)
  }


}

getImagen()

// const apiKey= "WrD1bukeKT5ir893Xjsrh3JwfDsSp7Id"

// const peticion= fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`)

// peticion
//   .then( res => res.json() )
//   .then( ({ data }) => {
//     const img= document.createElement('img')
//     img.src= data.images.original.url

//     document.body.append(img)
//   })
//   .catch( console.warn )