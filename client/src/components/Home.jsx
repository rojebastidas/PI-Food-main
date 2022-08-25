import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterRecipesDiets, getRecipes, filterCreaDb, orderName, orderHealtScore} from '../actions';
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

    function handleSortAlf(e){
        e.preventDefault();
        dispatch(orderName(e.target.value,"asc"))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
            
            
    };
    function handleSortHealthScore(e){
        e.preventDefault();
        dispatch(orderHealtScore(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
            
            
    };
    function handleFilterCreaDb(e){
        dispatch(filterCreaDb(e.target.value))
    }

    return (
        <div>
            <Link to= '/recipes'>
                Crear receta
            </Link>
            <h1>RECETAS DE COCINA</h1>
            <button onClick={e=>{handleClick(e)}}>
                Volver a cargar todas las recetas
            </button>
          <div>
                <label>Nombre Recipe</label>
                <select  onChange={e=>handleSortAlf(e)}>
                    <option value = 'asc'>Ascendente </option>
                    <option value='des'>Descendente </option>
                </select>
                <label>Health Score</label>
                <select id='tipoOrden' onChange={e=>handleSortHealthScore(e)}>
                    <option value = 'asc'>Ascendente</option>
                    <option value='des'>Descendente</option>
                </select>
                           
                
                
                
                <select onChange={e=>handleFilterDiets(e)}> 
                <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
                    <option value= "gluten free">gluten free</option>
                    <option value= "dairy free">dairy free</option>
                    <option value= "vegan">vegan</option>
                    <option value= "paleolithic">paleolithic</option>
                    <option value= "primal">primal</option>
                    <option value= "whole 30">whole 30</option>
                    <option value= "pescatarian" >pescatarian</option>
                    <option value= "ketogenic" >ketogenic</option>
                    <option value= "fodmap friendly">fodmap friendly</option>
                    
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
                  { //map recipes 
                  //console.log(currentRecipes)
                    currentRecipes?.map((e)=>{
                        return(
                        <fragment>
                            <Link to ={`/recipedetail/${e.id}`}>
                                <Card name={e.title ? e.title: e.name}   diets={e.diets.map(el=> el.concat(", "))}
                                      healtScore ={e.healtScore ? e.healtScore: e.healthScore}  id={e.id}
                                image={e.image}  key ={e.id}/>
                            </Link>
                        </fragment>
                        ) 
                    })                    
                        
                    
                    
                    
                    //image={e.image}

                    //map characters

                    // currentRecipes?.map((e)=>
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
