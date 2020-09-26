import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email }= formState;
    
    useEffect( () => {
        // console.log('Hey');
    }, []); //Al poner [] solo se dispara al cargar la pagina por primera vez
    
    useEffect( () => {
        // console.log('formState cambio');
    }, [formState]);

    useEffect( () => {
        // console.log('email cambio');
    }, [email]);

    const handleInputChange= ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            
            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value= {name}
                    onChange= { handleInputChange }
                />
            </div>

            <div className='form-group'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@bla.com'
                    autoComplete='off'
                    value= {email}
                    onChange= { handleInputChange }
                />
            </div>

            { name.includes('1') && <Message /> }

        </>
    );
};
