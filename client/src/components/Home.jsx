import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {filterRecipesDiets, getRecipes, filterCreaDb, orderName, orderHealtScore} from '../actions';
import {Link} from 'react-router-dom';
import Card from './recipes/Card';
import Paginado from './recipes/Paginado';
import SearchBar from './SearchBar';
import { BotonStyled1 } from './stylecomponents/BotonStyled';
import { DivStyled2, DivStyled3 } from './stylecomponents/DivStyled';
import { LabelStyled } from './stylecomponents/LabelStyled';
import { SelectStyled } from './stylecomponents/SelectStyled';

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
        //e.preventDefault();
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
            <DivStyled2>            
                <h1>COOKING RECIPES</h1>
                        <SearchBar/>
            <DivStyled3>
            <LabelStyled>Order By: </LabelStyled>    
            <LabelStyled>Name Recipe: </LabelStyled>
                <SelectStyled  onChange={e=>handleSortAlf(e)}>
                    <option value = 'asc'>Ascendente </option>
                    <option value='des'>Descendente </option>
                </SelectStyled>
                <LabelStyled>Health Score: </LabelStyled>
                <SelectStyled id='tipoOrden' onChange={e=>handleSortHealthScore(e)}>
                    <option value = 'asc'>Ascendente</option>
                    <option value='des'>Descendente</option>
                </SelectStyled>
                <LabelStyled>Type Diet: </LabelStyled>                      
                               
                <SelectStyled onChange={e=>handleFilterDiets(e)}> 
                <option value="All">Todas</option>
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
                    
                </SelectStyled>

                            
            </DivStyled3>
            <DivStyled3>
                
                
                
                <LabelStyled>Select by: </LabelStyled>
                <SelectStyled onChange={e=>handleFilterCreaDb(e)}>
                    <option value='All'>Todas las recetas</option>
                    <option value='creadb'>Creadas</option>
                    <option value='infapi'>Recetas foodApi</option>
                </SelectStyled>
                <BotonStyled1 onClick={e=>{handleClick(e)}}>
                    Volver a cargar todas las recetas
                </BotonStyled1>    
             </DivStyled3>   
            </DivStyled2>
          <div>
                
                <Paginado
                    recipesPerPage = {recipesPerPage}
                    allRecipes={allRecipes.length}
                    paginado={paginado}
                  />
                  
                  { //map recipes 
                  //console.log(currentRecipes)
                    // currentRecipes?.map((e)=>{
                    //     return(
                    //     <fragment>
                    //         <Link to ={`/recipedetail/${e.id}`}>
                    //             <Card name={e.title ? e.title: e.name}   diets={e.diets.map(el=> el.concat(", "))}
                    //                   healtScore ={e.healtScore ? e.healtScore: e.healthScore}  id={e.id}
                    //             image={e.image}  key ={e.id}/>
                    //         </Link>
                    //     </fragment>
                    //     ) 
                    // })                    
                        
                    currentRecipes?.map((e)=>{
                             return(
                             <fragment>
                                 <Link to ={`/recipedetail/${e.id}`}>
                                       <Card name={e.title ? e.title: e.name}  diets={ !e.createInDb? e.diets +  ', '   : e.diets.map (el=> el.name + ', ')}  
                                        healtScore ={e.healtScore ? e.healtScore: e.healthScore}  id={e.id}
                                     image={e.image}  key ={e.id}/>
                                 </Link>
                             </fragment>
                             ) 
                         })            
                    
                    
                    
                    //image={e.image}

                    //map characters
                     //{/* <Card name={e.title ? e.title: e.name}  diets={e.diets.map(el=> el.concat(", "))} -- diets={!e.diets.createInDb ? e.diets.map(el=> el.concat(", ")): e.diets.map(el=> el.name +" ")} diets={!e.diets.createInDb ? e.diets.map(el=> el + ', ') : e.diets.map (elm=> elm.name + ', ')}    */}
                      //               {/* <Card name={e.title ? e.title: e.name}  diets={e.diets.createInDb? e.diets.map(el=> el.name+ ', '): e.diets.map (el=> el + ', ') } */}    
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
