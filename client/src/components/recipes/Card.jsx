import React from "react";
import {Link} from 'react-router-dom';
import { DivStyled } from "../stylecomponents/DivStyled";
import { ImageStyled } from "../stylecomponents/ImageStyled";
//card diets
//export default function Card({name, diets, image,healtScore,id }){
    export default function Card({name, diets,image,healtScore,id }){
     //let hs=toString(healtScore)
     return(
         <DivStyled>
             
                <h3>Recipe: {name}</h3>
                <ImageStyled src={image} alt="img not found" />       
                  <h5>Dietas: {diets}</h5>    
            
                <p>Health Score: {healtScore}</p>
                
              
                       
             {/* //width="250px" height="300px" */}
         </DivStyled>

     )

}
//
// image,
//card characters
// export default function Card({name, image, nickname}){
    
//          return(
//              <div>
//                  <h3>{name}</h3>
//                   <h5>{nickname}</h5> 
//                  <img src={image} alt="img not found" width="250px" height="300px"/>
//                  {/* //width="250px" height="300px" */}
//              </div>
    
//          )
    
    
    
    
    
    
    // return(
    //     <div>
    //         <h3>{name}</h3>
    //         <h5>{diets}</h5>
    //         <img src={image} alt="img not found" width="300px" height="350px"/>

    //     </div>

    // )
//} 