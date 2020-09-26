import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    
    const handleClick= () => {
        // document.querySelector('input').focus(); //.select hace focus + selecciona el texto
        inputRef.current.focus();
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref= {inputRef}
                className='form-control'
                placeholder='Su nombre'
            />

            <button
                className='btn btn-outline-primary mt-5'
                onClick= {handleClick}    
            >
                Focus
            </button>
        </div>
    );
};
