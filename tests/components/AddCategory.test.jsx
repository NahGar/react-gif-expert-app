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
    
    test('debe llamar onNewCategory si el imput tiene un valor', () => { 

        // onNewCategory es una simulación
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: texto } } );

        fireEvent.submit( form );

        expect( input.value ).toBe( "" );
        
        //controla que llamara a la función ficticia onNewCategory
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( texto );
    });

    test('no debe llamar onNewCategory si el imput está vacío', () => { 

        // onNewCategory es una simulación
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form  = screen.getByRole('form');

        fireEvent.submit( form );

        //controla que llamara a la función ficticia onNewCategory
        //expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });
 });

