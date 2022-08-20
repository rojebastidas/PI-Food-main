import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRecipes} from '../actions';
import {Link} from 'react-router-dom';
import Card from './recipes/Card';

export default function Home(){
    const dispatch = useDispatch()
    const allRecipes = useSelector((state)=>state.recipes)

    useEffect(()=>{
        dispatch(getRecipes());

    },[dispatch])
    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes());
    }

    return (
        <div>
            <Link to= '/recipe'>
                Crear receta
            </Link>
            <h1>RECETAS DE COCINA</h1>
            <button onClick={e=>{handleClick(e)}}>
                Volver a cargar todas las recetas
            </button>
          <div>
                <select>
                    <option value = 'asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                           
                <select> 
                    <option value= 'All'>Todas</option>
                    <option value= 'gluFree'>gluten free</option>
                    <option value= 'lacOvoVeg'>lacto ovo vegetarian</option>
                    <option value= 'paleolithic'>paleolithic</option>
                    <option value= 'ketogenic'>ketogenic</option>
                    <option value= 'dairyFree'>dairy free</option>
                    <option value= 'primal'>primal</option>
                    <option value= 'fodmapFriendly'>fodmap friendly</option>
                </select>
                <select>
                    <option value='All'>Todas las recetas</option>
                    <option value='creadas'>Creadas</option>
                    <option value='impapi'>Recetas foodApi</option>
                </select>
                {
                    allRecipes?.map((e)=>{
                        return(
                        <fragment>
                            <Link to ={"/home/" + e.id}>
                                <Card name={e.title} image={e.image} diets={e.diets.map(el=> el.concat(", "))} key ={e.id}/>
                            </Link>
                        </fragment>
                        )
                    })
                }

            </div>
        </div>
    )
}
