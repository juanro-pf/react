import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp= ( { defaulCategories= [] } ) => {

    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState( defaulCategories );

    // const handleAdd= () => {

    //     setCategories( [...categories, 'One Piece'] );

    // }

    return(
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category =>
                    <GifGrid
                        category={ category }
                        key={ category }
                    />)
                }
            </ol>

        </div>
    );
};

export default GifExpertApp;