import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading(false);
    }

    //con useEffect con el segundo parámetro en [] hace que se ejecuta una única vez
    //en este caso getGifs cuando se crea el component
    useEffect( () => {
        //getGifs( category );
        getImages();
    }, [] );

    return {
         images,
         isLoading
    }
}
