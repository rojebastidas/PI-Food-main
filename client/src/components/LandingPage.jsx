import React from 'react';
import {Link} from 'react-router-dom';
import './landingpage.css'
import { BotonStyled } from './stylecomponents/BotonStyled';
import { DivStyled1 } from './stylecomponents/DivStyled1';
//import {Home} from './Home'
export default function LandingPage(){
    return(
    <DivStyled1>
        <h1>HENRY FOOD</h1>
        <h1>COOKING RECIPES </h1>
        <Link to = '/home'>
            {/* <button>Recipes</button> */}
            <BotonStyled>Recipes</BotonStyled>
        </Link>
        <style>
          margin-top: 20em;
          background-color:black;
        </style>
        
    </DivStyled1>
   ) 
}