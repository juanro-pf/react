import React, { useState, useMemo } from 'react';
import { heavyProccess } from '../../helpers/heavyProccess';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const {counter, increment }= useCounter(5000);
    const [show, setShow] = useState(true);

    const memoHP= useMemo(() => heavyProccess( counter ), [ counter ]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter <small>{ counter }</small> </h3>
            <hr />

            <p> {memoHP} </p>

            <button
                className='btn btn-primary'
                onClick= { increment }
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary ml-3'
                onClick= { () => {
                    setShow( !show )
                }}
            >
                Show / Hide {JSON.stringify(show)}
            </button>

        </div>
    );
};
