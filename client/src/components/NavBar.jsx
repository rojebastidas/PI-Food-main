import React from 'react';
import { NavLink } from "react-router-dom" ;
import "./navbar.css"

export default function NavBar(){
    return (
        <React.Fragment className="nav">
            <nav>
                <ul>
                    <li>
                        <NavLink to = {"/home"}>Home</NavLink>
                    </li>
                    {/* <li>
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
                </ul>
            </nav>
        </React.Fragment>
        
    )
}