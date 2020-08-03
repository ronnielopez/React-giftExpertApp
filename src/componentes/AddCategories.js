import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategories = ({setCategories, categories}) => {

    const [input, setinput] = useState('');

    const inputonChange = (e) =>{
        setinput(e.target.value);
    }

    const eventSubmit = (e)=>{
        e.preventDefault();
        if(input.trim().length > 2){
        setCategories(cats => [ input,...cats]);
        setinput('');
        }
    }

    return (
        <form onSubmit={eventSubmit}>
            <input
                type="text"
                value = {input}
                onChange = {inputonChange}
            />
            </form>
    )
}
//validando que mande un componente
AddCategories.propTypes = {

    setCategories : PropTypes.func.isRequired

}