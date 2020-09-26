import React from 'react'; //imr
// import React, { Fragment } from 'react';
// <> </ >     <--------Fragment sin importación
import PropTypes from 'prop-types'

// const PrimeraApp = ( props ) => {
    const PrimeraApp = ( { saludos, subtitulo } ) => {

    // const saludo= ["ehh", 5, 2, "e"]
    const saludo= "Hola Mundo";
    // const saludo= {
    //     ehh: "ehhh",
    //     EHHH: "EHHH"
    // }

    // console.log(props)

    // if(!saludos){
    //     throw new Error( "El saludo es necesario" );
    // };

    return (
        <>
            {/* <h1>{ JSON.stringify(saludo) }</h1> */}
            {/* <h1>{ JSON.stringify(saludo, null, 3) }</h1> */}
            {/* <h1>{ saludo }</h1> */}
            {/* <h1>{ props.saludo }</h1> */}
            <h1>{ saludos }</h1>
            <p>{ subtitulo }</p>
        </>
    );
};

PrimeraApp.propTypes= {
    saludos: PropTypes.string.isRequired
};

PrimeraApp.defaultProps= {
    subtitulo: "Soy un subtitulo"
};

export default PrimeraApp;