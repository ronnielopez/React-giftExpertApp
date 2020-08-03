import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GrifItemItem } from './GrifItemItem';
//import { getGifs } from '../helpers/GetGifs';

export const GifRead = ({category}) => {

   /* useEffect(() => {
    getGifs(category).then( img => setImages(img));
    }, [category]);

    const [images, setImages] = useState([]);
     */   
    
   const {data:images, loading} = useFetchGifs( category );


    return (
        <>
        <h3 className='animate__animated animate__bounce'>{category}</h3>

        {loading && 'Cargandoo....'}


        <div className='card-grid'>
            {
              
                images.map(img =>(
                    <GrifItemItem
                    key = {img.id} 
                    {...img}/>
                ))
                
            }
        </div>
        </>
    )
}
