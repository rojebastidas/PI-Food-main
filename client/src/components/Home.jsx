import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterRecipesDiets, getRecipes, filterCreaDb, orderName} from '../actions';
import {Link} from 'react-router-dom';
import Card from './recipes/Card';
import Paginado from './recipes/Paginado';
import SearchBar from './SearchBar';

export default function Home(){
    const dispatch = useDispatch()
    const allRecipes = useSelector((state)=>state.recipes)
    const [orden, setOrden]=useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, setRecipesPerPage]= useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe,indexOfLastRecipe)  
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    } 

    useEffect(()=>{
        dispatch(getRecipes());

    },[dispatch])
    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes());
    }
    function handleFilterDiets(e){
        dispatch(filterRecipesDiets(e.target.value))
    }

    function handleSort(e){
        e.preventDefault();
        dispatch(orderName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
            
            
    };
    function handleFilterCreaDb(e){
        dispatch(filterCreaDb(e.target.value))
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
                <select onChange={e=>handleSort(e)}>
                    <option value = 'asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                           
                
                <select onChange={e=>handleFilterDiets(e)}> 
                    <option value= 'All'>Todos</option>
                    <option value= 'Alive'>Vivo</option>
                    <option value= 'Deceased'>Muerto</option>
                    <option value= 'Unknown'>Desconocido</option>
                    <option value= 'Presumed dead'>Probablemente muerto</option>
                    
                </select>
                <select onChange={e=>handleFilterCreaDb(e)}>
                    <option value='All'>Todas las recetas</option>
                    <option value='creadb'>Creadas</option>
                    <option value='infapi'>Recetas foodApi</option>
                </select>
                <Paginado
                    recipesPerPage = {recipesPerPage}
                    allRecipes={allRecipes.length}
                    paginado={paginado}
                  />
                  <SearchBar/>
                {   //map recipes 
                    currentRecipes?.map((e)=>{
                        return(
                        <fragment>
                            <Link to ={"/home/" + e.id}>
                                <Card name={e.title} image={e.image} diets={e.diets.map(el=> el.concat(", "))} key ={e.id}/>
                            </Link>
                        </fragment>
                        )
                    })

                    //map characters

                    // currentRecipes?.map((e)=>{
                    //     return(
                    //     <fragment>
                    //         <Link to ={"/home/" + e.id}>
                    //             <Card name={e.name} image={e.img} nickname={e.nickname} key ={e.id}/>
                    //         </Link>
                    //     </fragment>
                    //     )
                    // })

                }

            </div>
        </div>
    )
}
