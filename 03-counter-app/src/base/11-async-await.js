export const getImagen = async() => {

    try {

        const apiKey = 'WrD1bukeKT5ir893Xjsrh3JwfDsSp7Id';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'error';
    }

}

 getImagen();