//Rafc para crear componnente 

import React, {useState} from 'react'
import { AddCategories } from './componentes/AddCategories';
import { GifRead } from './componentes/GifRead';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Full Metal Alchimist']);

    /*const eventHandler = () =>{
         //setCategories([...categories, 'Full Metal Alchemist']);
            setCategories(cats => [...cats, 'Full Metal Alchemist']);
    }*/

    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategories setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category  =>(
                        <GifRead 
                        key = {category}
                        category={category}
                        />
                        ))
                }
            </ol>
          
        </div>
    )
}
