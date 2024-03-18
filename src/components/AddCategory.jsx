import { useState } from "react"
import PropTypes from 'prop-types';

//export const AddCategory = ( { setCategories} ) => {
// { onNewCategory } es una función pasada por parámetro
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
        <form onSubmit={ onSubmit } aria-label="form">
          <input 
              type = "text"
              placeholder= "Buscar gifs"
              value={ inputValue }
              onChange={ onInputChange }
          />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}