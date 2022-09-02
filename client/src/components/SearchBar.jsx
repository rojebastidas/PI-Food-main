import React from 'react';
import {useState} from 'react';
import {useDispatch} from "react-redux";
import { getNameRecipes, deleteRecipe } from '../actions';
import { BotonStyled1 } from './stylecomponents/BotonStyled';
import { DivStyled3 } from './stylecomponents/DivStyled';
import { InputStyled } from './stylecomponents/InputStyled';
export default function SearchBar(){
    const dispatch = useDispatch()
    const [name,setName]=useState("")
    const [id,setId]= useState("")
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }
    //Eliminar por id
    // function handleInputChangeId(e){
    //     e.preventDefault()
    //     setId(e.target.value)
    //     console.log(id)
    // }
    //Eliminar por id
    // function handleSubmitId(e){
    //     e.preventDefault()
    //        setId(e.target.value)
    //        console.log("id",id) 
    //        dispatch(deleteRecipe(id))
        
    // }

    function handleSubmit(e){
        e.preventDefault()
        
           dispatch(getNameRecipes(name))
        
    }


    return(
        <DivStyled3>
            <InputStyled 
               type="text" 
               placeholder = "Buscar..."
               onChange ={(e)=>handleInputChange(e)}
            
            />
            <BotonStyled1  type='submit' onClick={(e)=> handleSubmit(e)}>Buscar</BotonStyled1>
            
            {/* <InputStyled 
               type="text" 
                 placeholder = "Borrar Receta"
               onChange ={(e)=>handleInputChangeId(e)}
            
            />
            <BotonStyled1 type='submit'  onClick={(e)=> handleSubmitId(e)}>Borrar</BotonStyled1> */}

        </DivStyled3>
    )
}