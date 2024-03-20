import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
    
    const texto = 'Goku';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <GifExpertApp /> );
                
        const input = screen.getByRole('textbox');

        // se dispara el evento input del textbox de búsqueda, y se simula que tiene un target.value = 'Goku'
        fireEvent.input( input, { target: { value: texto } } );

        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( container ).toMatchSnapshot();

        //screen.debug();
    });
    
 });