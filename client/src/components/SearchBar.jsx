import React from 'react';
import {useState} from 'react';
import {useDispatch} from "react-redux";
import { getNameRecipes } from '../actions';
import { BotonStyled1 } from './stylecomponents/BotonStyled';
import { DivStyled3 } from './stylecomponents/DivStyled';
export default function SearchBar(){
    const dispatch = useDispatch()
    const [name,setName]=useState("")
   
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameRecipes(name))
    }


    return(
        <DivStyled3>
            <input 
               type="text" 
               placeholder = "Buscar..."
               onChange ={(e)=>handleInputChange(e)}
            
            />
            <BotonStyled1 type='submit' onClick={(e)=> handleSubmit(e)}>Buscar</BotonStyled1>
        </DivStyled3>
    )
}