import React from 'react';
import { AStyled, LiStyled, UlStyled } from '../stylecomponents/UlStyled';
export default function Paginado({recipesPerPage,allRecipes,paginado}){
    const pageNumbers = []

    for (let i = 0; i<Math.ceil(allRecipes/recipesPerPage); i++){
        pageNumbers.push(i+1)
    }
    return (
        <nav>
            <UlStyled className = 'paginado'>
                {
                    pageNumbers?.map(number =>(
                        <LiStyled className= 'number' key ={number}>
                            <AStyled onClick={()=>paginado(number)}>{number}</AStyled>

                        </LiStyled>
                    ))
            }

        </UlStyled>
    </nav>
)

}