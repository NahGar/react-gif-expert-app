import { GifItem, GifItem2 } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
    
    //if(images.length === 0) return '';

    return (
        <>
            <h3>{category}</h3>
            {
                //isLoading ? ( <h2>Cargando...</h2> ) : null
                isLoading && ( <h2>Cargando...</h2> )
            }
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
            <div className="grid-Container">
            {
                images.map( ( image ) => (
                    <GifItem2 
                        key={image.id} 
                        { ...image } //equivale a hacer id={id},title={title},etc
                    />    
                ))
            }
            </div>
        </>
    )
    */
}
