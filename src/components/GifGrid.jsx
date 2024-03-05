import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    //con useEffect con el segundo parámetro en [] hace que se ejecuta una única vez
    //en este caso getGifs cuando se crea el component
    useEffect( () => {
        getGifs( category );
    }, [] );
    
    return (
        <>
            <h3>{category}</h3>
        </>
    )
}
