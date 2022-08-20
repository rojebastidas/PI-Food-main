import React from 'react';
import {Link} from 'react-router-dom';
//import {Home} from './Home'
export default function LandingPage(){
    return(
    <div>
        <h1>Recipes de cocina</h1>
        <Link to = '/home'>
            <button>Recipes</button>
        </Link>
    </div>
   ) 
}