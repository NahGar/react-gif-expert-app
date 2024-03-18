import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 
    
    const category = 'Goku';

    test('debe mostrar el loading al iniciar', () => { 
        
        //simula el return de useFetchGifs 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid  category={ category } />);
        
        expect( screen.getByText('Cargando...') ).toBeTruthy();
        expect( screen.getByText( category ) ).toBeTruthy();
    });


    test('debe mostrar items cuando se cargan las imágenes useFetchGifs', () => {
       
        const gifs = [
            {
                id: 'AAA',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'BBB',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        //simula el return de useFetchGifs 
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid  category={ category } />);

        expect( screen.getAllByRole("img").length ).toBe(2);

    });

});

