import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    
    const texto = 'Goku';

    test('debe cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {} } /> );

        const input = screen.getByRole('textbox');

        // se dispara el evento input del textbox de búsqueda, y se simula que tiene un target.value = 'Goku'
        fireEvent.input( input, { target: { value: texto } } );

        expect( input.value ).toBe( texto );
        
        //para ir viendo el html
        //screen.debug();
    });
    
 });

