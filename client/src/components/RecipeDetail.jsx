import  {useParams}  from "react-router-dom";
import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getRecipeDetail } from "../actions/index";



 export default function RecipeDetail(){
  const dispatch = useDispatch()
    //useParams()=>React.useParams(); 
   let params = useParams();  
    let id = params.id;
    console.log(id);  

    //console.log(props)
    // const dispatch = useDispatch() 
    // const params=  useParams();
    //console.log(params)     
    
    useEffect(()=> {
      //let {id}=useParams; 
      console.log("id",id)
        dispatch(getRecipeDetail(id));
    },[])


const recDetail = useSelector((state)=>state.recipeDetail)
// let {steps,name} = recDetail;
//onsole.log("steps ",steps,name)
return (
    <div>
        {
          recDetail.length>0 ?
          <div>
            <h1>Hola</h1>
            <h1>Receta: {recDetail[0].name}</h1>
               <img src={recDetail[0].image} alt="img not found" />       
                <h5>Dietas: {!recDetail[0].createInDb? recDetail[0].diets + (", "):recDetail[0].diets.map(el=>el.name) + (", ")}</h5> 
            
                <p>Health Score: {recDetail[0].healthScore }</p>
                <p>Resumen del Plato: {recDetail[0].summary }</p>
                <label> Paso a paso: </label>
                                    <p>{recDetail[0].steps +"  " }</p>
                <label>Paso a pasd 1</label>

                {/* {steps[0]} */}
                                  
              {/* <ol><li>{recDetail[0].steps.map(elm=> elm.map(el=> el) )}</li></ol> */}
              {/* steps: el.analyzedInstructions?.map(e=> e.steps.map(elem=>elem.step + '* \n ')), */}
                                     
          </div>: <p>Recipe no se encontro</p>  
        }
    </div>
)
}