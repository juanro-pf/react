import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

export const Layout = () => {

    const { counter, increment }= useCounter(1);

    let url= `https://www.breakingbadapi.com/api/quotes/${ counter }`;
    
    const { data }= useFetch(url);
    const { quote }= !!data && data[0];
    // data puede regresar null
    // !null= true
    // !!null= false

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState(0);

    useLayoutEffect(() => {
        setBoxSize(
            pTag.current.getBoundingClientRect().width
        )
    }, [quote]);

    return (
        <div>
            <h1>Layout effect</h1>
            <hr />
            <blockquote className='blockquote text-right'>
                <p
                    className='mb-0'
                    ref={pTag}
                >
                    { quote }
                </p>
            </blockquote>

            <pre>
                { boxSize }
            </pre>

            <button
                className='btn btn-primary'
                onClick={increment}
            >
                Next quote
            </button>

        </div>
    )
};