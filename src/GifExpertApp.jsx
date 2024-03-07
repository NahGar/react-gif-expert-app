import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

let contador = 1;

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    
    const onAddCategory = ( newCategory ) => {
        
        //Forma 1 de hacerlo. Spread (...) convierte en una lista de items para 
        //simplificar agregar otros items
        //setCategories( [ ...categories, 'Probando ' + contador] );
        //Forma 2 de hacerlo
        //setCategories( cat => [ ...cat, 'Probando ' + contador] );
        //contador += 1;

        //2 formas
        //if( categories.indexOf( newCategory ) !== -1) return;

        const categoriesLower = categories.map(element => {
            return element.toLowerCase();
        });

        if( categoriesLower.includes( newCategory.toLowerCase() ) ) return;

        setCategories( [ newCategory, ...categories ] );

    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ ( value ) => onAddCategory( value ) }
            />

            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                ))
            }
        </>
    )
}
