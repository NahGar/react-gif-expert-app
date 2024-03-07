import { useState } from "react"

//export const AddCategory = ( { setCategories} ) => {
export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
      setInputValue( event.target.value );
    }

    const onSubmit = (event) => {
      event.preventDefault();

      if( inputValue.trim().length <= 1 ) return;
      //if( categories.findIndex( inputValue.trim() ) !== undefined) return;

      //hace callback ya que categories no está definido aquí
      //setCategories( categories => [ inputValue, ...categories] );

      //devuelve a padre mediante prop onNewCategory
      onNewCategory( inputValue.trim() );

      setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
          <input 
              type = "text"
              placeholder= "Buscar gifs"
              value={ inputValue }
              onChange={ onInputChange }
          />
        </form>
    )
}
