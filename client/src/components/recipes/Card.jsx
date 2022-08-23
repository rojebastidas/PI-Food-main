import react from "react";
//card diets
export default function Card({name, diets, image}){
     //let hs=toString(healtScore)
     return(
         <div>
             
             <h3>{name}</h3>
              <h5>{diets}</h5> 
              <img src={image} alt="img not found" />  
                       
             {/* //width="250px" height="300px" */}
         </div>

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