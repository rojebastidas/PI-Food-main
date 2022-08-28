import React from 'react';
import { NavLink } from "react-router-dom" ;
import "./navbar.css"
import { LiStyled,LiStyled1, UlStyled,UlStyled1, NavLinkStyled, AStyled, AStyled1 } from './stylecomponents/UlStyled';

export default function NavBar(){
    return (
        <React.Fragment className="nav">
            <nav>
                <UlStyled1>
                    <LiStyled1>
                        <NavLinkStyled to = {"/home"}>Home</NavLinkStyled>
                    </LiStyled1>
                    <LiStyled1>
                        <NavLinkStyled to= '/recipes'>
                            Create Recipe
                        </NavLinkStyled>
                    </LiStyled1>
                    {/*
                     <li>
                    <NavLink to = {"/users"}>Users</NavLink>
                    </li>
                    
                    <li>
                    <NavLink to = {"/create"}>CreateUsers</NavLink>
                    </li>
                    <li>
                        <NavLink to = {"/about"}>About</NavLink>
                    </li> */}
                    {/* <Route exact path ='/' component = {LandingPage}/>
            <Route path = '/home' component={Home}/>
             <Route path='/recipes' component={CrearRecipe}/> 
             <Route path='/recipedetail/:id' component={RecipeDetail}/> */}
                </UlStyled1>
            </nav>
        </React.Fragment>
        
    )
}