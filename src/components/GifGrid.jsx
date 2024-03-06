import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);


    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
    }

    //con useEffect con el segundo parámetro en [] hace que se ejecuta una única vez
    //en este caso getGifs cuando se crea el component
    useEffect( () => {
        //getGifs( category );
        getImages();
    }, [] );
    
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
            { 
                images.map( ( image ) => (
                    <GifItem 
                        key={image.id} 
                        //image={image} 
                        { ...image } //equivale a hacer id={id},title={title},etc
                    />              
                ))
            }
            </div>
        </>
    )
    
    /*
    return (
        <>
            <h3>{category}</h3>

            <div class="grid-Container">
                
                {
                    images.map( ({ id, title, url }) => (
                        <div key={id}>    
                            <p>{title}</p>
                            <img src={url} class="imgResult"></img>                        
                        </div> 
                    ))
                }
                
            </div>
        </>
    )
    */
}
