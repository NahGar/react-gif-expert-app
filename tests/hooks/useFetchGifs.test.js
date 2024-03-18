import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en hook useFetchGifs', () => {


    const category = "Goku";

    test('debe retornar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs( category) );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();
        
    });

    test('debe retornar un arreglo de imagenes y isLoading en false', async() => {

        const { result } = renderHook( () => useFetchGifs( category) );

        //el test debe ser async y waitFor espera un tiempo en este caso a que termine useFetchGifs
        await waitFor( 
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );        

        const { images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();
        
    });
    
 });