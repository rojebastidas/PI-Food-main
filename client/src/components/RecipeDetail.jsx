import  {useParams}  from "react-router-dom";
import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getRecipeDetail } from "../actions/index";
import { DivStyled4 } from "./stylecomponents/DivStyled";
import { LabelStyled1 } from "./stylecomponents/LabelStyled";
import { PStyled } from "./stylecomponents/PStyled";
import { H2Styled, H4Styled1 } from "./stylecomponents/HStyled";
import { ImageStyled } from "./stylecomponents/ImageStyled";



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
    <DivStyled4>
        {
          recDetail.length>0 ?
          <div>
               <H2Styled>Recipe: {recDetail[0].name}</H2Styled>
               {/* <img src={recDetail[0].image} alt="img not found" />        */}
               <ImageStyled src={recDetail[0].image} alt="img not found" /> 
                <H4Styled1>Dietas: {!recDetail[0].createInDb? recDetail[0].diets + (",  "):recDetail[0].diets.map(el=>el.name) + (",  ")}</H4Styled1> 
            
                <LabelStyled1>Health Score: {recDetail[0].healthScore }</LabelStyled1>
                
                <PStyled><LabelStyled1>Resumen del Plato: </LabelStyled1>  {recDetail[0].summary }</PStyled>
                <PStyled> <LabelStyled1> Paso a paso: </LabelStyled1> {recDetail[0].steps +"  " }</PStyled>
                {/* <label>Paso a pasd 1</label> */}

                {/* {steps[0]} */}
                                  
              {/* <ol><li>{recDetail[0].steps.map(elm=> elm.map(el=> el) )}</li></ol> */}
              {/* steps: el.analyzedInstructions?.map(e=> e.steps.map(elem=>elem.step + '* \n ')), */}
                                     
          </div>: <p>Loading...</p>  
        }
    </DivStyled4>
)
}